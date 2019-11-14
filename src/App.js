import React from "react";
import Box from "./components/Box";

const App = () => {
  return (
    <div className="container">
      {Array(15)
        .fill()
        .map((_, index) => (
          <Box key={index} boxNo={index + 1} />
        ))}
    </div>
  );
};

export default App;
