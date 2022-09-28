import { ThemeContext } from "@core/context";
import { Topic } from "@core/models/types";
import { HashLink } from "@ui/bricks";
import React, { useContext, useMemo } from "react";
import styles from "./ProductNavBlock.scss";

type Props = {
  topic: Topic;
  activeHash: string;
};

export const ProductNavBlock = React.memo<Props>(({ topic, activeHash }) => {
  const theme = useContext(ThemeContext);

  const isTopicActive = useMemo(
    () =>
      topic.subTopics.some((s) => s.hash === activeHash) ||
      activeHash === topic.hash,
    [activeHash, topic.hash, topic.subTopics]
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
              ? theme.projectsProductNavigationBlockHashLinkActive
              : theme.projectsProductNavigationBlockHashLink,
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
              isActive={activeHash === s.hash}
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
