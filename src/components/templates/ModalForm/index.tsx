import { FormikHelpers } from "formik";
import React from "react";

import FormFormik, { TInitValues } from "../../molecules/FormFormik";
import { BodyDiv } from "./style.module";

function ModalForm() {
  const handleSubmitFormik = (
    values: TInitValues,
    { setSubmitting }: FormikHelpers<TInitValues>
  ) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 400);
  };
  return (
    <BodyDiv>
      <FormFormik onSubmit={handleSubmitFormik} />
    </BodyDiv>
  );
}

export default ModalForm;
