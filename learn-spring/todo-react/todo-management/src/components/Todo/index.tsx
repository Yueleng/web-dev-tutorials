import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { retrieveTodoApi } from "../../api/TodoApiService";
import { useAuth } from "../../hooks/useAuth";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function TodoComponent() {
  const { id } = useParams();
  const { username } = useAuth();

  const [description, setDescription] = useState<string>("");
  const [targetDate, setTargetDate] = useState<string>("");

  const onSubmit = (values: any) => {
    console.log(values);
  };

  const validate = (values: { description: string; targetDate: string }) => {
    const errors = {
      description: "Enter a valid description",
      targetDate: "Enter a valid target date",
    };

    if (values.description.length < 5) {
      errors.description = "Enter atleast 5 characters";
    }

    if (values.targetDate == null) {
      errors.targetDate = "Enter a target date";
    }

    console.log(values);
    return errors;
  };

  const retrieveTodos = useCallback(() => {
    retrieveTodoApi(username, id || "")
      .then((response) => {
        setDescription(response.data.description);
      })
      .catch((error) => console.log(error));
  }, [id, username]);

  useEffect(() => retrieveTodos(), [retrieveTodos]);

  return (
    <div className="container">
      <h1>Enter Todo Details </h1>
      <div>
        <Formik
          initialValues={{ description, targetDate }}
          enableReinitialize={true}
          onSubmit={onSubmit}
          validate={validate}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {(props) => (
            <Form>
              <ErrorMessage
                name="description"
                component="div"
                className="alert alert-warning"
              />

              <ErrorMessage
                name="targetDate"
                component="div"
                className="alert alert-warning"
              />

              <fieldset className="form-group">
                <label>Description</label>
                <Field
                  type="text"
                  className="form-control"
                  name="description"
                />
              </fieldset>
              <fieldset className="form-group">
                <label>Target Date</label>
                <Field type="date" className="form-control" name="targetDate" />
              </fieldset>
              <div>
                <button className="btn btn-success m-5" type="submit">
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
