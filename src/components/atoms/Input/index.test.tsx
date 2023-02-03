import { render, screen } from "@testing-library/react";
import React from "react";

import Input from ".";

describe("Input component ", () => {
  it("- Render", () => {
    const { container } = render(<Input />);

    const inputNode = container.getElementsByTagName("input");

    expect(inputNode.length).toBe(1);
  });
});
