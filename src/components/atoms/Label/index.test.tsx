import { render, screen } from "@testing-library/react";
import React from "react";

import Label from ".";

describe("Label component ", () => {
  it("- render", () => {
    const { container } = render(
      <Label componentName="teste" textContent="render text" />
    );

    const labelNode = container.getElementsByTagName("label");

    expect(labelNode.length).toBe(1);
  });
  it("- Component Properties", () => {
    const { container } = render(
      <Label componentName="teste" textContent="render text" />
    );

    const labelNameNode = container.getElementsByTagName("label");
    const labelContentNode = screen.getByText("render text");

    expect(labelNameNode[0].htmlFor).toBe("teste");
    expect(labelContentNode.textContent).toBe("render text");
  });
});
