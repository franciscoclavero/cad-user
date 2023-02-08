import { fireEvent, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import FormFormik from ".";

describe("FormFormik component ", () => {
  it("- render", () => {
    const { container } = render(<FormFormik onSubmit={() => {}} />);

    const inputNodes = container.getElementsByTagName("input");

    expect(inputNodes[0].name).toBe("firstName");
    expect(inputNodes[1].name).toBe("lastName");
    expect(inputNodes[2].name).toBe("streetLine");
    expect(inputNodes[3].name).toBe("streetLine2");
    expect(inputNodes[4].name).toBe("city");
    expect(inputNodes[5].name).toBe("state");
  });
  it("- Submit", async () => {
    const handleSubmit = jest.fn();
    const { container } = render(<FormFormik onSubmit={handleSubmit} />);
    const user = userEvent.setup();

    const inputNodes = container.getElementsByTagName("input");

    await user.type(inputNodes[0], "first name");
    await user.type(inputNodes[1], "last name");
    await user.type(inputNodes[2], "street line");
    await user.type(inputNodes[3], "street line 2");
    await user.type(inputNodes[4], "city");
    await user.type(inputNodes[5], "state");

    const formNode = container.getElementsByTagName("form")[0];
    fireEvent.submit(formNode);

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith(
        {
          city: "city",
          firstName: "first name",
          lastName: "last name",
          state: "state",
          streetLine: "street line",
          streetLine2: "street line 2",
        },
        expect.anything()
      );
    });
  });
});
