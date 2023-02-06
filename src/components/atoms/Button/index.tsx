import React, { MouseEventHandler } from "react";

import { ButtonStyled } from "./style.module";

export interface IButton {
  click: MouseEventHandler<HTMLDivElement>;
}

function Button({ click }: IButton) {
  return <ButtonStyled onClick={click}>Cadastrar</ButtonStyled>;
}

export default Button;
