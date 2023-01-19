import React from "react";
import "./login.scss";
import { useFormik } from "formik";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { signUpSchema } from "../../schema";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmpassword: "",
};

const Login = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  console.log(errors);

  return (
    <>
      <div className="login">
        <Sidebar />
        <div className="logincontainer">
          <Navbar />
          <div className="loginwrap">
            <form onSubmit={handleSubmit}>
              <div className="formdiv">
                <label htmlFor="name">Name : </label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={values.name}
                  onBlur={handleBlur}
                  name="name"
                  id="name"
                  autoComplete="off"
                />
                {errors.name && touched.name ? <p>{errors.name}</p> : null}
              </div>

              <div className="formdiv">
                <label htmlFor="email">E-mail : </label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                  name="email"
                  id="email"
                  autoComplete="off"
                />
                {errors.email && touched.email ? <p>{errors.email}</p> : null}
              </div>

              <div className="formdiv">
                <label htmlFor="password">Password : </label>
                <input
                  type="password"
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                  name="password"
                  id="password"
                  autoComplete="off"
                />
                {errors.password && touched.password ? (
                  <p>{errors.password}</p>
                ) : null}
              </div>

              <div className="formdiv">
                <label htmlFor="confirmpassword">Confirm Password : </label>
                <input
                  type="text"
                  onChange={handleChange}
                  value={values.confirmpassword}
                  onBlur={handleBlur}
                  name="confirmpassword"
                  id="confirmpassword"
                  autoComplete="off"
                />
                {errors.confirmpassword && touched.confirmpassword ? (
                  <p>{errors.confirmpassword}</p>
                ) : null}
              </div>

              <button type="submit`">Submit Here</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
