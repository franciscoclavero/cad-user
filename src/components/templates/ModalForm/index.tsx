import { Formik } from "formik";
import React from "react";

import Button from "../../atoms/Button";
import InputLabel from "../../molecules/InputLabel";
import { BodyDiv, FlexDiv, ButtonFlex, Title } from "./style.module";

function ModalForm() {
  return (
    <BodyDiv>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          streetLine: "",
          streetLine2: "",
          city: "",
          state: "",
        }}
        render={({ values, handleChange }) => (
          <form>
            <Title>Name</Title>
            <FlexDiv>
              <InputLabel name="firstName" textLabel="First name" />
              <InputLabel name="lastName" textLabel="Last name" />
            </FlexDiv>
            <Title>Address</Title>
            <div>
              <InputLabel name="streetLine" textLabel="Street line" />
              <InputLabel name="streetLine2" textLabel="Street line 2" />
              <FlexDiv>
                <InputLabel name="city" textLabel="City" />
                <InputLabel name="state" textLabel="State/Province" />
              </FlexDiv>
            </div>
          </form>
        )}
        onSubmit={() => {}}
      />
      <ButtonFlex>
        <Button click={() => {}} />
      </ButtonFlex>
    </BodyDiv>
  );
}

export default ModalForm;
