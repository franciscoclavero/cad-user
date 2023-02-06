import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import Button from ".";

describe("Button component ", () => {
  it("- render", () => {
    render(<Button click={() => {}} />);

    const buttonNode = screen.getByText("Cadastrar");
    expect(buttonNode.textContent).toBe("Cadastrar");
  });
  it("- onClick event", () => {
    const handleClick = jest.fn();
    render(<Button click={handleClick} />);

    const buttonNode = screen.getByText("Cadastrar");
    fireEvent.click(buttonNode);
    fireEvent.click(buttonNode);
    fireEvent.click(buttonNode);

    expect(handleClick).toHaveBeenCalledTimes(3);
  });
});
