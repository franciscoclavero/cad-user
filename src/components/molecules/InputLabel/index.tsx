import React, { ChangeEventHandler } from "react";

import Input from "../../atoms/Input";
import Label from "../../atoms/Label";
import { InputLabelStyled, ErrorStyled } from "./style.module";

export interface IInputLabel {
  name: string;
  textLabel: string;
  value: string;
  change: ChangeEventHandler<HTMLInputElement>;
  error: string;
}

function InputLabel({ name, textLabel, value, change, error }: IInputLabel) {
  return (
    <InputLabelStyled>
      <Label componentName={name} textContent={textLabel} />
      <Input name={name} change={change} value={value} />
      <ErrorStyled>{error}</ErrorStyled>
    </InputLabelStyled>
  );
}

export default InputLabel;
