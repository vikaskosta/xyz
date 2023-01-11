import { useFormik } from "formik";
import React from "react";
import "./login.css";
import { signUpSchema } from "./schemas";
import Signup from "./signup";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

const Login = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values,action) => {
        console.log(values)
        action.resetForm();
      },
    });

  return (
    <>
      <div className="container">
        <div className="left">
          <h1>blogger</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="right">
          <div className="detail">
            <form onSubmit={handleSubmit}>
              {/* Title:
              <select name="title">
                <option value="Mr."> Mr.</option>
                <option value="Mrs."> Mrs.</option>
                <option value="Miss"> Miss</option>
              </select> */}
              <div className="formdiv">
                <input
                  type="text"
                  placeholder="FirstName"
                  name="firstname"
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="firstname"
                />
                {errors.firstname && touched.firstname ? <p>{errors.firstname}</p> : null}
              </div>

              <div className="formdiv">
                <input
                  type="text"
                  placeholder="LastName"
                  name="lastname"
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="firstname"
                />
                {errors.lastname && touched.lastname ? <p>{errors.lastname}</p> : null}
              </div>

              <div className="formdiv">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="firstname"
                />
                {errors.email && touched.email ? <p>{errors.email}</p> : null}
              </div>

              <div className="formdiv">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="firstname"
                />
                {errors.password && touched.password ? <p>{errors.password}</p> : null}
              </div>
              <button>Sign In</button>
            </form>
            <div className="forgot">Forgot Password?</div>
            <div className="hr">
              <hr />
            </div>
            <Signup />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
