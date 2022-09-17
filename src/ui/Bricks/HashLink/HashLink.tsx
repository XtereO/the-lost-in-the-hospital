import React, { useState } from "react";

type Props = {
  hash: string;
  fontSize: number;
  color: string;
  activeColor: string;
  children: React.ReactNode;
};

export const HashLink = React.memo<Props>(
  ({ hash, fontSize, color, activeColor, children }) => {
    const [style, setStyle] = useState({ color, fontSize });
    return <span style={style}>{children}</span>;
  }
);
