import React from "react";
import { render } from "@testing-library/react";
import Box from "..";

describe("Box Classname Tests", () => {
  test("renders a green box ", () => {
    const boxIndex = 1;
    const { container } = render(<Box boxNo={boxIndex} />);

    expect(container.firstChild.classList.contains("box-green")).toBe(true);
  });

  test("renders a blue box ", () => {
    const boxIndex = 3;
    const { container } = render(<Box boxNo={boxIndex} />);

    expect(container.firstChild.classList.contains("box-blue")).toBe(true);
  });
});
