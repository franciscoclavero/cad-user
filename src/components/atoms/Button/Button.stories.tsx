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
    click: () => {
      console.log("Teste");
    },
  },
} as Meta<IButton>;

export const Default: StoryObj<IButton> = {};
