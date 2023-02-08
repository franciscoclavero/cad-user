import { render, screen } from "@testing-library/react";
import React from "react";

import InputLabel from ".";

describe("InputLabel ", () => {
  it("- render InputLabel", () => {
    render(
      <InputLabel
        name="name"
        textLabel="First Name: "
        change={() => {}}
        value=""
        error=""
      />
    );

    const InputLabelNode = screen.getByText("First Name:");

    expect(InputLabelNode.innerHTML).toBe("First Name: ");
  });
  it("- render Label", () => {
    const { container } = render(
      <InputLabel
        name="name"
        textLabel="First Name: "
        change={() => {}}
        value=""
        error=""
      />
    );

    const labelNode = container.getElementsByTagName("label");

    expect(labelNode.length).toBe(1);
  });
  it("- render Input", () => {
    const { container } = render(
      <InputLabel
        name="name"
        textLabel="First Name: "
        change={() => {}}
        value=""
        error=""
      />
    );

    const inputNode = container.getElementsByTagName("input");

    expect(inputNode.length).toBe(1);
  });
  it("- Error", () => {
    const mockError = "Error test";
    const { container } = render(
      <InputLabel
        name="name"
        textLabel="First Name: "
        change={() => {}}
        value=""
        error={mockError}
      />
    );

    const errorNode = container.getElementsByTagName("p")[0];
    expect(errorNode.innerHTML).toBe("Error test");
  });
});
