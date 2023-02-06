import React from "react";

import Input from "../../atoms/Input";
import Label from "../../atoms/Label";
import { InputLabelStyled } from "./style.module";

interface IInputLabel {
  name: string;
  textLabel: string;
}

function LabelInput({ name, textLabel }: IInputLabel) {
  return (
    <InputLabelStyled>
      <Label componentName={name} textContent={textLabel} />
      <Input name={name} />
    </InputLabelStyled>
  );
}

export default LabelInput;
