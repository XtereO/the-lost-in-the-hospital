import React, { useContext } from "react";
import { InfoBlock } from "../Bricks";
import { LanguageContext } from "../../context";
import { Banner } from "./Banner";
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
