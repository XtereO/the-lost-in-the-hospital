import { ThemeContext } from "@core/context";
import { CustomizedNavLink } from "@ui/bricks";
import React, { useContext } from "react";
import styles from "./NavBlock.scss";

type Props = {
  genre: string;
  products: { title: string; to: string }[];
};

export const NavBlock = React.memo<Props>(({ genre, products }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={styles.navigation_block} data-testid="navigation-block">
      <p
        style={{ color: theme.projects.navBlock.genre }}
        className={styles.navigation_block__genre}
        data-testid="navigation-block-genre"
      >
        {genre}
      </p>
      <div
        className={styles.navigation_block__nav_links}
        data-testid="navigation-block-nav-links"
      >
        {products.map((product) => (
          <CustomizedNavLink
            key={product.title}
            fontSize={18}
            color={theme.projects.navBlock.navLink}
            activeColor={theme.projects.navBlock.navLinkActive}
            to={product.to}
          >
            {product.title}
          </CustomizedNavLink>
        ))}
      </div>
    </div>
  );
});
