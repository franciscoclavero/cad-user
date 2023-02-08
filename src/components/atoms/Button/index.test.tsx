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
    const handler = jest.fn((e) => e.preventDefault());
    render(<Button disabled={false} />);

    const buttonNode = screen.getByText("Cadastrar");
    console.log(buttonNode);

    fireEvent.click(buttonNode);
    fireEvent.click(buttonNode);
    fireEvent.click(buttonNode);

    expect(handler).toHaveBeenCalledTimes(3);
  });
  it("- disabled component", () => {
    const { container } = render(<Button disabled={false} />);

    const buttonNode = container.getElementsByTagName("button")[0];
    expect(buttonNode.disabled).toBe(false);
    buttonNode.disabled = true;
    expect(buttonNode.disabled).toBe(true);
  });
});
