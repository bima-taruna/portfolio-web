import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { login } from "../../../actions/auth";
import CloseButton from "../../Shared/Button/CloseButton";
import { useAppSelector, useAppDispatch } from "../../../services/hooks";
import "./login.scss";

const Login: React.FC = () => {
  const form = React.useRef();
  const checkBtn = React.useRef();
  const navigate = useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const { message } = useAppSelector((state) => state.message);

  const dispatch = useAppDispatch();

  function validateUsername(value: string) {
    let error;
    if (!value) {
      error = "Invalid username";
    }
    return error;
  }

  function validatePassword(value: string) {
    let error;
    if (!value) {
      error = "Invalid password";
    }
    return error;
  }
  return (
    <section className="login-container">
      <section className="form-login">
        <CloseButton />
        <section className="form-header">
          <h1>SIGN IN</h1>
        </section>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={async (values) => {
            setLoading(true);
            await dispatch(login(values.username, values.password));
            navigate("/");
            window.location.reload();
          }}
        >
          {({ errors, touched, isValidating }) => (
            <Form className="login-form-body">
              <Field
                className="login-field"
                name="username"
                id="username"
                placeholder="username"
                validate={validateUsername}
              />
              {errors.username && touched.username && (
                <div>{errors.username}</div>
              )}
              <Field
                name="password"
                type="password"
                id="password"
                placeholder="password"
                className="login-field"
                validate={validatePassword}
              />
              {errors.password && touched.password && (
                <div>{errors.password}</div>
              )}
              <button className="btn-login" type="submit">
                Submit
              </button>
              {message ? message : ""}
            </Form>
          )}
        </Formik>
      </section>
    </section>
  );
};

export default Login;
