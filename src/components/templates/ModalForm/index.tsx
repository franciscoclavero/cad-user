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
        validate={(values) => {
          const errors = {
            firstName: "",
            lastName: "",
            streetLine: "",
            streetLine2: "",
            city: "",
            state: "",
          };
          if (!values.firstName) errors.firstName = "First name is required";
          if (!values.lastName) errors.lastName = "Last Name is required";
          if (!values.streetLine) errors.streetLine = "Street Line is required";
          if (!values.state) errors.state = "State is required";
          if (!values.city) errors.city = "City is required";
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Title>Name</Title>
            <FlexDiv>
              <InputLabel
                name="firstName"
                textLabel="First name"
                value={values.firstName}
                change={handleChange}
                error={errors.firstName}
              />
              <InputLabel
                name="lastName"
                textLabel="Last name"
                value={values.lastName}
                change={handleChange}
                error={errors.lastName}
              />
            </FlexDiv>
            <Title>Address</Title>
            <div>
              <InputLabel
                name="streetLine"
                textLabel="Street line"
                value={values.streetLine}
                change={handleChange}
                error={errors.streetLine}
              />
              <InputLabel
                name="streetLine2"
                textLabel="Street line 2"
                value={values.streetLine2}
                change={handleChange}
                error={errors.streetLine2}
              />
              <FlexDiv>
                <InputLabel
                  name="city"
                  textLabel="City"
                  value={values.city}
                  change={handleChange}
                  error={errors.city}
                />
                <InputLabel
                  name="state"
                  textLabel="State/Province"
                  value={values.state}
                  change={handleChange}
                  error={errors.state}
                />
              </FlexDiv>
            </div>
            <ButtonFlex>
              <Button disabled={isSubmitting} />
            </ButtonFlex>
          </form>
        )}
      </Formik>
    </BodyDiv>
  );
}

export default ModalForm;
