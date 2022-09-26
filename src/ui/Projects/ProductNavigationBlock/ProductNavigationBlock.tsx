import React, { useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../../context";
import { Topic } from "../../../types";
import { HashLink } from "../../Bricks";
import styles from "./ProductNavigationBlock.scss";

type Props = {
  topic: Topic;
};

export const ProductNavigationBlock = React.memo<Props>(({ topic }) => {
  const theme = useContext(ThemeContext);
  const location = useLocation();
  console.log(location.hash);
  const hash = useMemo(() => location.hash.slice(1), [location.hash]);
  const isTopicActive = useMemo(
    () => topic.subTopics.some((s) => s.hash === hash) || hash === topic.hash,
    [hash, topic.hash, topic.subTopics]
  );
  return (
    <div
      className={styles.product_navigation_block}
      data-testid="product-navigation-block"
    >
      <div
        className={styles.product_navigation_block__topic}
        data-testid="product-navigation-block-topic"
      >
        <div
          style={{
            backgroundColor: isTopicActive
              ? theme.projectsProductNavigationBlockHashLink
              : theme.projectsProductNavigationBlockHashLinkActive,
          }}
          className={styles.product_navigation_block__topic__ellipse}
          data-testid="product-navigation-block-topic-ellipse"
        />
        <div data-testid="product-navigation-block-topic-link">
          <HashLink
            isActive={isTopicActive}
            hash={topic.hash}
            fontSize={30}
            color={theme.projectsProductNavigationBlockHashLink}
            activeColor={theme.projectsProductNavigationBlockHashLinkActive}
          >
            {topic.title}
          </HashLink>
        </div>
      </div>
      <div
        className={styles.product_navigation_block__subtopics}
        data-testid="product-navigation-block-subtopics"
      >
        {topic.subTopics.map((s) => (
          <div key={s.hash}>
            <HashLink
              isActive={hash === s.hash}
              fontSize={24}
              hash={s.hash}
              color={theme.projectsProductNavigationBlockHashLink}
              activeColor={theme.projectsProductNavigationBlockHashLinkActive}
            >
              {s.title}
            </HashLink>
          </div>
        ))}
      </div>
    </div>
  );
});
