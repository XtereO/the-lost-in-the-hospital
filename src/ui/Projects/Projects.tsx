import React, { useCallback, useContext, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { LanguageContext, ThemeContext } from "../../context";
import { SubTopic, Topic as TopicType } from "../../types";
import { NavigationBlock } from "./NavigationBlock";
import { ProductNavigationBlock } from "./ProductNavigationBlock";
import styles from "./Projects.scss";
import { Topic } from "./Topic";

export const Projects = React.memo(() => {
  const theme = useContext(ThemeContext);
  const text = useContext(LanguageContext);
  const location = useLocation();
  const product = useMemo(
    () =>
      text.projects
        .reduce((acc, project) => (acc = [...acc, ...project.products]), [])
        .filter((product) => location.pathname.includes(product.to))[0],
    [location.pathname]
  );
  const topics = useMemo(
    () =>
      product
        ? product.topics.map((t: TopicType) => ({
            ...t,
            ref: React.createRef(),
            subTopics: t.subTopics.map((s: SubTopic) => ({
              ...s,
              ref: React.createRef(),
            })),
          }))
        : [],
    [product]
  );

  const handleHashChange = useCallback(() => {
    topics
      .reduce(
        (acc: SubTopic[], t: TopicType) =>
          (acc = [...acc, t as SubTopic, ...t.subTopics]),
        []
      )
      .filter(
        (t: SubTopic & { ref: HTMLDivElement }) =>
          t.hash === location.hash.slice(1)
      )[0]
      .ref.current.scrollIntoView({ behavior: "smooth" });
  }, [topics]);
  useEffect(() => {
    window.removeEventListener("hashchange", handleHashChange);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [topics]);

  return (
    <div className={styles.projects} data-testid="projects">
      <div
        className={styles.projects__navigation}
        style={{ borderRightColor: theme.projectsNavigationBorderColor }}
        data-testid="projects-navigation"
      >
        {text.projects.map((p) => (
          <NavigationBlock
            key={p.genre}
            genre={p.genre}
            products={p.products}
          />
        ))}
      </div>
      <div className={styles.projects__content} data-testid="projects-content">
        {topics.map(
          (t: TopicType & { ref: React.RefObject<HTMLDivElement> }) => (
            <Topic key={t.title} topic={t} ref={t.ref} />
          )
        )}
      </div>
      <div
        className={styles.projects__product_navigation}
        data-testid="projects-product-navigation"
      >
        <div data-testid="projects-product-navigation-header">
          {text.navigation}
        </div>
        <div>
          {topics.map((t: TopicType) => (
            <ProductNavigationBlock topic={t} />
          ))}
        </div>
      </div>
    </div>
  );
});
