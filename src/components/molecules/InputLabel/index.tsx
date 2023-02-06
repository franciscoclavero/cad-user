import React, { ChangeEventHandler } from "react";

import Input from "../../atoms/Input";
import Label from "../../atoms/Label";
import { InputLabelStyled } from "./style.module";

export interface IInputLabel {
  name: string;
  textLabel: string;
  value: string;
  change: ChangeEventHandler<HTMLInputElement>;
}

function InputLabel({ name, textLabel, value, change }: IInputLabel) {
  return (
    <InputLabelStyled>
      <Label componentName={name} textContent={textLabel} />
      <Input name={name} change={change} value={value} />
    </InputLabelStyled>
  );
}

export default InputLabel;
