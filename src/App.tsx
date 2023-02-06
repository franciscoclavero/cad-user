import React from "react";

import Input from "./components/atoms/Input";
import Label from "./components/atoms/Label";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Label componentName="name" textContent="Digite o nome: " />
      <Input name="name" />
    </div>
  );
}

export default App;
