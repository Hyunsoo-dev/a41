import React from "react";
import "../Style/H0.scss";
import "../Style/Main.scss";
type H0Props = {
  title: string;
};

const H0 = ({ title }: H0Props) => {
  return (
    <div className={"h0_title"}>
      {title}
      <span className={"dot"}>.</span>
    </div>
  );
};

export default H0;
