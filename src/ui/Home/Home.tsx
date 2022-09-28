import { LanguageContext } from "@core/context";
import { InfoBlock } from "@ui/bricks";
import React, { useContext } from "react";
import { Banner } from "./banner";
import styles from "./Home.scss";

export const Home = React.memo(() => {
  const text = useContext(LanguageContext);
  return (
    <div data-testid="home">
      <Banner />
      <div className={styles.info_blocks} data-testid="info-blocks">
        {text.infoBlocks.map((i) => (
          <InfoBlock key={i.header} {...i} />
        ))}
      </div>
    </div>
  );
});
