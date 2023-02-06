import { Meta, StoryObj } from "@storybook/react";

import Label, { ILabel } from ".";

export default {
  title: "Atoms/Label",
  component: Label,
  args: {
    componentName: "name",
    textContent: "First name",
  },
} as Meta<ILabel>;

export const Default: StoryObj<ILabel> = {};
