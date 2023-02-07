import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import Button from ".";

describe("Button component ", () => {
  it("- render", () => {
    render(<Button disabled={false} />);

    const buttonNode = screen.getByText("Cadastrar");
    expect(buttonNode.textContent).toBe("Cadastrar");
  });
  it("- onClick event", () => {
    const handleClick = jest.fn();
    render(<Button disabled={false} />);

    const buttonNode = screen.getByText("Cadastrar");
    fireEvent.click(buttonNode);
    fireEvent.click(buttonNode);
    fireEvent.click(buttonNode);

    expect(handleClick).toHaveBeenCalledTimes(3);
  });
  it("- disabled component", () => {
    const { container } = render(<Button disabled={false} />);

    const buttonNode = container.getElementsByTagName("button")[0];
    expect(buttonNode.disabled).toBe(false);
    buttonNode.disabled = true;
    expect(buttonNode.disabled).toBe(true);
  });
});
