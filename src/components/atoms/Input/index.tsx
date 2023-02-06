import React from "react";

import { StyledInput } from "./style.module";

interface IInput {
  name: string;
}

function Input({ name }: IInput) {
  return <StyledInput name={name} type="text" />;
}

export default Input;
