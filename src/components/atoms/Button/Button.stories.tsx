import { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";

import Button from ".";

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
} as Meta;

export const Default: StoryObj = {};
