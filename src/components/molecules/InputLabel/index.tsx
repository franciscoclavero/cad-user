import React from "react";

import Input from "../../atoms/Input";
import Label from "../../atoms/Label";
import { InputLabelStyled } from "./style.module";

export interface IInputLabel {
  name: string;
  textLabel: string;
}

function InputLabel({ name, textLabel }: IInputLabel) {
  return (
    <InputLabelStyled>
      <Label componentName={name} textContent={textLabel} />
      <Input name={name} />
    </InputLabelStyled>
  );
}

export default InputLabel;
