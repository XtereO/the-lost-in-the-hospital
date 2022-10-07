import { useCallback, useState } from "react";

type Props = {
  activeStyle: Style;
  defaultStyle: Style;
};
type Style = {
  color?: string;
  background?: string;
  borderColor?: string;
  boxShadow?: string;
};

export const useMouse = ({ activeStyle, defaultStyle }: Props) => {
  const [style, setStyle] = useState(defaultStyle);
  const handleMouseOver = useCallback(() => {
    setStyle(activeStyle);
  }, [activeStyle]);
  const handleMouseOut = useCallback(() => {
    setStyle(defaultStyle);
  }, [defaultStyle]);
  return { handleMouseOut, handleMouseOver, style };
};
