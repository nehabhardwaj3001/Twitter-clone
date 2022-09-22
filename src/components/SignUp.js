import React, { useState } from "react";
import { Modal } from "antd";
import { FaTwitter } from "react-icons/fa";
import "../components/styles/SignIn.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(details));
    // setSubmitForm(!submitForm);
    if (Object.keys(formErrors).length === 0 && submitForm) {
      setSubmitForm(true);
      localStorage.setItem("details", JSON.stringify(details));
      axios
        .post("http://localhost:5000/signup", {
          fname: "details.firstname",
          lname: "details.lastname",
          email: "emai.email",
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log("error from client side", error);
        });
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = "First Name is required!";
    }
    if (!values.lastname) {
      errors.lastname = "Last Name is required!";
    }
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
      <h1 className="heading">Join Twitter today</h1>
      {submitForm && (
        <div className="success">
          <h1>Registered Successfully!!!</h1>
          <button className="btn" onClick={() => navigate("/home")}>
            OK
          </button>
        </div>
      )}
      {/* {submitForm && ( */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name :</label>
          <input
            type="text"
            id="firstName"
            onChange={(e) =>
              setDetails({ ...details, firstname: e.target.value })
            }
            value={details.firstname}
          />
        </div>
        <p className="error"> {formErrors.firstname} </p>
        <div className="form-group">
          <label htmlFor="lastName">Last Name :</label>
          <input
            type="text"
            id="lastName"
            onChange={(e) =>
              setDetails({ ...details, lastname: e.target.value })
            }
            value={details.lastname}
          />
        </div>
        <p className="error"> {formErrors.lastname} </p>
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
        <button className="btn" type="submit">
          Sign Up
        </button>
        <p className="change">
          Have an account already? <Link to="/login">Log in</Link>
        </p>
      </form>
      {/* )} */}
    </Modal>
  );
};

export default SignUp;
