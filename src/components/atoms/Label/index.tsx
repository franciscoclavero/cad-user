import React from "react";

import { LabelStyled } from "./style.module";

export interface ILabel {
  componentName: string;
  textContent: string;
}

function Label({ componentName, textContent }: ILabel) {
  return <LabelStyled htmlFor={componentName}>{textContent}</LabelStyled>;
}

export default Label;
