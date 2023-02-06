import React from "react";

interface ILabel {
  componentName: string;
  textContent: string;
}

function Label({ componentName, textContent }: ILabel) {
  return <label htmlFor={componentName}>{textContent}</label>;
}

export default Label;
