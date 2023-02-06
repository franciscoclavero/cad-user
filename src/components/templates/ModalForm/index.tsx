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
              <InputLabel
                name="firstName"
                textLabel="First name"
                value={values.firstName}
                change={handleChange}
              />
              <InputLabel
                name="lastName"
                textLabel="Last name"
                value={values.lastName}
                change={handleChange}
              />
            </FlexDiv>
            <Title>Address</Title>
            <div>
              <InputLabel
                name="streetLine"
                textLabel="Street line"
                value={values.streetLine}
                change={handleChange}
              />
              <InputLabel
                name="streetLine2"
                textLabel="Street line 2"
                value={values.streetLine2}
                change={handleChange}
              />
              <FlexDiv>
                <InputLabel
                  name="city"
                  textLabel="City"
                  value={values.city}
                  change={handleChange}
                />
                <InputLabel
                  name="state"
                  textLabel="State/Province"
                  value={values.state}
                  change={handleChange}
                />
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
