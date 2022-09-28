import { ThemeContext } from "@core/context";
import { SubTopic as SubTopicType, Topic as TopicType } from "@core/models";
import React, { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Topic.scss";

type Props = {
  topic: TopicType;
};

export const Topic = React.memo(
  React.forwardRef(({ topic }: Props, ref) => {
    const theme = useContext(ThemeContext);
    const [refObserver, inView] = useInView();
    useEffect(() => {
      if (inView) {
        history.pushState(null, null, `#${topic.hash}`);
        window.dispatchEvent(new HashChangeEvent("hashchange"));
      }
    }, [inView]);

    return (
      <div className={styles.topic} data-testid="topic">
        <div ref={refObserver}>
          <div
            ref={ref as React.LegacyRef<HTMLDivElement>}
            style={{ color: theme.projects.content.topicTitle }}
            className={styles.topic__title}
            data-testid="topic-title"
          >
            {topic.title}
          </div>
          <div
            style={{ color: theme.projects.content.text }}
            className={styles.topic__text}
            data-testid="topic-description"
          >
            {topic.description}
          </div>
        </div>
        {topic.subTopics.map((s) => (
          //@ts-ignore
          <SubTopic ref={s.ref} key={s.hash} subTopic={s} />
        ))}
      </div>
    );
  })
);

type PropsSubTopic = {
  subTopic: SubTopicType;
};
const SubTopic = React.memo(
  React.forwardRef(({ subTopic }: PropsSubTopic, ref) => {
    const theme = useContext(ThemeContext);
    const [refObserver, inView] = useInView();
    useEffect(() => {
      if (inView) {
        history.pushState(null, null, `#${subTopic.hash}`);
      }
    }, [inView]);

    return (
      <div
        ref={refObserver}
        data-testid="topic-sub-topic"
        className={styles.topic__sub_topic}
      >
        <div
          ref={ref as React.LegacyRef<HTMLDivElement>}
          style={{ color: theme.projects.content.subTopicTitle }}
          className={styles.topic__sub_topic__title}
        >
          {subTopic.title}
        </div>
        <div
          style={{ color: theme.projects.content.text }}
          className={styles.topic__text}
        >
          {subTopic.description}
        </div>
      </div>
    );
  })
);
