import { fireEvent, render } from "@testing-library/react";
import React from "react";

import Input from ".";

describe("Input component ", () => {
  it("- Render", () => {
    const { container } = render(<Input name="teste" />);

    const inputNode = container.getElementsByTagName("input");

    expect(inputNode.length).toBe(1);
  });
  it("- OnChange", () => {
    const { container } = render(<Input name="teste" />);
    const inputNode = container.getElementsByTagName("input");
    expect(inputNode[0].value).toBe("");
    fireEvent.change(inputNode[0], { target: { value: "Good Day" } });
    expect(inputNode[0].value).toBe("Good Day");
  });
});
