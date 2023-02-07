import { Formik, FormikHelpers } from "formik";
import React from "react";

import Button from "../../atoms/Button";
import {
  FlexDiv,
  ButtonFlex,
  Title,
} from "../../templates/ModalForm/style.module";
import InputLabel from "../InputLabel";

export const initValues = {
  firstName: "",
  lastName: "",
  streetLine: "",
  streetLine2: "",
  city: "",
  state: "",
};

export type TInitValues = typeof initValues;
export type TFormFormik = {
  onSubmit: (
    values: TInitValues,
    FormikHelpers: FormikHelpers<TInitValues>
  ) => void;
};
function FormFormik({ onSubmit }: TFormFormik) {
  return (
    <Formik initialValues={initValues} validate={() => {}} onSubmit={onSubmit}>
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
  );
}

export default FormFormik;
