import { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";

import Button, { IButton } from ".";

export default {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    msw: {
      handlers: [
        rest.post("/cad-user", (req, res) => {
          return res();
        }),
      ],
    },
  },
  args: {
    disabled: false,
  },
} as Meta<IButton>;

export const Default: StoryObj<IButton> = {};
