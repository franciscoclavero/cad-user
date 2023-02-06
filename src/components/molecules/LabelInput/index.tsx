import React from "react";

import Input from "../../atoms/Input";
import Label from "../../atoms/Label";

interface ILabelInput {
  name: string;
  textLabel: string;
}

function LabelInput({ name, textLabel }: ILabelInput) {
  return (
    <div>
      <Label componentName={name} textContent={textLabel} />
      <Input name={name} />
    </div>
  );
}

export default LabelInput;
