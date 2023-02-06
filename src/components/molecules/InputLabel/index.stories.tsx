import { Meta, StoryObj } from "@storybook/react";

import InputLabel, { IInputLabel } from ".";

export default {
  title: "Molecules/InputLabel",
  component: InputLabel,
  args: {
    name: "name",
    textLabel: "First name: ",
    change: () => {},
    value: "",
  },
} as Meta<IInputLabel>;

export const Default: StoryObj<IInputLabel> = {};
