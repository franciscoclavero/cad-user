import React from "react";

import Button from "./components/atoms/Button";
import InputLabel from "./components/molecules/InputLabel";

function App() {
  return (
    <div>
      <InputLabel name="name" textLabel="First Name:" />
      <Button click={() => {}} />
    </div>
  );
}

export default App;
