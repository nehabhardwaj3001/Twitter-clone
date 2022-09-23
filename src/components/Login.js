import React, { useState } from "react";
import { Modal } from "antd";
import { FaTwitter } from "react-icons/fa";
import "../components/styles/SignIn.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [submitForm, setSubmitForm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = await validate(details);
    if (Object.keys(formErrors).length === 0) {
      setSubmitForm(true);
      axios
        .post(``, {
          email: details.email,
          pswd: details.password,
        })
        .then((res) => {
          // console.log(response);
        })
        .catch((error) => {
          console.log("error from client side", error);
        });
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (values.password.length === 0) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    console.log("errors", errors);
    return errors;
  };

  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      footer={null}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
    >
      <FaTwitter className="icons logo twi twitte" />
      <h1 className="heading">Sign in to Twitter</h1>
      {submitForm && (
        <div className="success">
          <h1>Logged In Successfully!!!</h1>
          <button className="btn" onClick={() => navigate("/home")}>
            OK
          </button>
        </div>
      )}
      {/* {!submitForm && ( */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <p className="error"> {formErrors.email} </p>
        <div className="form-group">
          <label htmlFor="password">Password :</label>
          <input
            type="password"
            id="password"
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <p className="error"> {formErrors.password} </p>
        <div>
          <button className="btn" type="submit">
            Sign In
          </button>
          <p className="change">
            Don’t have an account?<Link to="/signup">Sign up</Link>
          </p>
        </div>
      </form>
      {/* )} */}
    </Modal>
  );
};

export default Login;
