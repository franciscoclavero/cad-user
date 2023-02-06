import React from "react";

import Button from "../../atoms/Button";
import InputLabel from "../../molecules/InputLabel";

function ModalForm() {
  return (
    <div>
      <h3>Name</h3>
      <div>
        <InputLabel name="firstName" textLabel="First name" />
        <InputLabel name="lastName" textLabel="Last name" />
      </div>
      <h3>Address</h3>
      <div>
        <InputLabel name="streetLine" textLabel="Street line" />
        <InputLabel name="streetLine2" textLabel="Street line 2" />
        <div>
          <InputLabel name="city" textLabel="City" />
          <InputLabel name="state" textLabel="State/Province" />
        </div>
      </div>
      <Button click={() => {}} />
    </div>
  );
}

export default ModalForm;
