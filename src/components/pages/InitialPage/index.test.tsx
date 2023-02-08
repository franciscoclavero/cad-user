import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

import App from ".";

describe("InitialPage component ", () => {
  it("- Render", () => {
    render(<App />);
    const nodeName = screen.queryByText("Name");

    expect(nodeName).toBeInTheDocument();
  });
});
