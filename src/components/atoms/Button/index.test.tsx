import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import Button from ".";

describe("Button component ", () => {
  it("- render", () => {
    render(<Button disabled={false} />);

    const buttonNode = screen.getByText("Cadastrar");
    expect(buttonNode.textContent).toBe("Cadastrar");
  });

  it("- disabled component", () => {
    const { container } = render(<Button disabled={false} />);

    const buttonNode = container.getElementsByTagName("button")[0];
    expect(buttonNode.disabled).toBe(false);
    buttonNode.disabled = true;
    expect(buttonNode.disabled).toBe(true);
  });
});
