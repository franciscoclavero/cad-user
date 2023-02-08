import axios from "axios";

import { TInitValues } from "../components/molecules/FormFormik";

export function postData(dataForm: TInitValues) {
  axios.post(`https://63dba7f2c45e08a0434a8d16.mockapi.io/cad-user`, {
    firstName: dataForm.firstName,
    lastName: dataForm.lastName,
    streetLineFirst: dataForm.streetLine,
    streetLineSecond: dataForm.streetLine2,
    city: dataForm.city,
    state: dataForm.state,
  });
}
