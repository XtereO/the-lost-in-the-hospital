import { LanguageContext, ThemeContext } from "@core/context";
import { SubTopic, Topic as TopicType } from "@core/models";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLocation } from "react-router-dom";
import { NavBlock } from "./nav-block";
import { ProductNavBlock } from "./product-nav-block";
import styles from "./Projects.scss";
import { Topic } from "./topic";

export const Projects = React.memo(() => {
  const theme = useContext(ThemeContext);
  const text = useContext(LanguageContext);

  const location = useLocation();
  const product = useMemo(
    () =>
      text.projects
        .reduce((acc, project) => (acc = [...acc, ...project.products]), [])
        .filter((product) => location.pathname.includes(product.to))[0] ??
      text.projects[0].products[0],
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

  const [activeHash, setActiveHash] = useState(location.hash);
  const handleHashChange = useCallback(() => {
    const hash = window.location.hash.slice(1);
    setActiveHash(hash);
    topics
      .reduce(
        (acc: SubTopic[], t: TopicType) =>
          (acc = [...acc, t as SubTopic, ...t.subTopics]),
        []
      )
      .filter((t: SubTopic & { ref: HTMLDivElement }) => t.hash === hash)[0]
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
          <NavBlock key={p.genre} genre={p.genre} products={p.products} />
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
        <div
          className={styles.projects__product_navigation__header}
          data-testid="projects-product-navigation-header"
        >
          {text.navigation}
        </div>
        <div>
          {topics.map((t: TopicType) => (
            <ProductNavBlock key={t.title} topic={t} activeHash={activeHash} />
          ))}
        </div>
      </div>
    </div>
  );
});
