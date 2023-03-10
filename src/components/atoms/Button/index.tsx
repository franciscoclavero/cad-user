import React, { useEffect } from "react";

import { ButtonStyled } from "./style.module";

export interface IButton {
  disabled: boolean;
}

function Button({ disabled }: IButton) {
  useEffect(() => {}, [disabled]);

  return (
    <ButtonStyled type="submit" disabled={disabled}>
      Cadastrar
    </ButtonStyled>
  );
}

export default Button;
