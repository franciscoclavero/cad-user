import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";

import ModalForm from ".";

describe("ModalForm component ", () => {
  it("- render", () => {
    const { container } = render(<ModalForm />);

    const modalFormNode = container.getElementsByTagName("h3");

    expect(modalFormNode.length).toBe(2);
  });
  it("- render InputLabel", () => {
    const { container } = render(<ModalForm />);

    const inputLabelNode = container.getElementsByTagName("input");

    expect(inputLabelNode.length).toBe(6);
  });
  it("- render Button", () => {
    render(<ModalForm />);

    const buttonNode = screen.getByText("Cadastrar");

    expect(buttonNode.innerHTML).toBe("Cadastrar");
  });
  it("- Submit", async () => {
    const { container } = render(<ModalForm />);

    const buttonNode = container.getElementsByTagName("button")[0];

    fireEvent.click(buttonNode);
    expect(buttonNode.disabled).toBe(true);
    await waitFor(() => {
      expect(buttonNode.disabled).toBe(false);
    });
  });
});
