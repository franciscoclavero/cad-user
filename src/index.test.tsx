import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

import App from "./App";

describe("App ", () => {
  it("- Render", () => {
    const { container } = render(<App />);
    const node = screen.queryByText("Hello World");

    expect(node).toBeInTheDocument();
  });
});
