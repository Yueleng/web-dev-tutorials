import React from "react";
import { Form, Formik, FormikHelpers, FormikValues } from "formik";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import Wrapper from "../components/Wrapper";
import InputField from "../components/InputField";

interface RegisterProps {
  props1: string;
  props2: string;
}

const Register: React.FC<RegisterProps> = ({ props1, props2 }) => {
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async function (
          values: FormikValues,
          formikHelpers: FormikHelpers<FormikValues>
        ): Promise<any> {
          console.log(values);
          // const response = await login({ options: values });
          throw new Error("Function not implemented.");
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <InputField
              name="username"
              placeholder="username"
              label="Username"
            />

            <InputField
              name="password"
              placeholder="password"
              label="Password"
              type="password"
            />
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
