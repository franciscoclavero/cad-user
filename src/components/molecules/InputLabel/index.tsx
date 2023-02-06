import React from "react";

import Input from "../../atoms/Input";
import Label from "../../atoms/Label";
import { InputLabelStyled } from "./style.module";

interface ILabelInput {
  name: string;
  textLabel: string;
}

function LabelInput({ name, textLabel }: ILabelInput) {
  return (
    <InputLabelStyled>
      <Label componentName={name} textContent={textLabel} />
      <Input name={name} />
    </InputLabelStyled>
  );
}

export default LabelInput;
