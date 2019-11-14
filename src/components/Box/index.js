import React from "react";

const Box = ({ boxNo }) => {
  const boxClass = boxNo % 3 === 0 ? "box-blue" : "box-green";

  return <div datatest-id="box-test" className={`box ${boxClass}`}></div>;
};

export default Box;
