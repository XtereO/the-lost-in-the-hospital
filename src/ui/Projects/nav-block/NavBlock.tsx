import { ThemeContext } from "@core/context";
import { CustomizedNavLink } from "@ui/bricks";
import React, { useContext } from "react";
import styles from "./NavigationBlock.scss";

type Props = {
  genre: string;
  products: { title: string; to: string }[];
};

export const NavBlock = React.memo<Props>(({ genre, products }) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={styles.navigation_block} data-testid="navigation-block">
      <p
        style={{ color: theme.projectsNavigationBlockGenre }}
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
            fontSize={24}
            color={theme.projectsNavigationBlockNavLink}
            activeColor={theme.projectsNavigationBlockNavLinkActive}
            to={product.to}
          >
            {product.title}
          </CustomizedNavLink>
        ))}
      </div>
    </div>
  );
});
