import React, { ChangeEventHandler } from "react";

import { StyledInput } from "./style.module";

interface IInput {
  name: string;
  change: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

function Input({ name, change, value }: IInput) {
  return (
    <StyledInput name={name} type="text" onChange={change} value={value} />
  );
}

export default Input;
