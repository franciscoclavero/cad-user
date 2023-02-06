import React from "react";

import Button from "./components/atoms/Button";
import Input from "./components/atoms/Input";
import Label from "./components/atoms/Label";

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Label componentName="name" textContent="Digite o nome: " />
      <Input name="name" />
      <Button click={() => {}} />
    </div>
  );
}

export default App;
