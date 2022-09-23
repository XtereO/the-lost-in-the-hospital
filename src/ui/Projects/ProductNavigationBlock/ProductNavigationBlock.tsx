import React from "react";
import { Topic } from "../../../types";

type Props = {
  topic: Topic & { isActive: boolean };
};

export const ProductNavigationBlock = React.memo<Props>(({ topic }) => {
  return <div data-testid="product-navigation-block"></div>;
});
