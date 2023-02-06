import { fireEvent, render } from "@testing-library/react";
import React from "react";

import Input from ".";

describe("Input component ", () => {
  it("- Render", () => {
    const { container } = render(
      <Input name="teste" change={() => {}} value="" />
    );

    const inputNode = container.getElementsByTagName("input");

    expect(inputNode.length).toBe(1);
  });
  it("- OnChange", () => {
    const handlerChange = jest.fn();
    const { container } = render(
      <Input name="teste" change={handlerChange} value="" />
    );
    const inputNode = container.getElementsByTagName("input");
    fireEvent.change(inputNode[0], { target: { value: "Good Day" } });
    expect(handlerChange).toHaveBeenCalledTimes(1);
  });
  it("- Value", () => {
    const { container } = render(
      <Input name="teste" change={() => {}} value="" />
    );
    const inputNode = container.getElementsByTagName("input");
    inputNode[0].value = "New value";

    expect(inputNode[0].value).toBe("New value");
  });
});
