import React, { useState } from "react";
import { Modal } from "antd";
import { FaTwitter } from "react-icons/fa";
import "../components/styles/SignIn.css";
import axios from "axios";

const SignUp = () => {
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [submitForm, setSubmitForm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    axios
      .post(``, {
          headers: { "Access-Control-Allow-Origin": "*" },
        },
        {
          fname: details.firstname,
          lname: details.lastname,
          email: details.email,
        }
      )
      .then((res) => {

      });
      setSubmitForm(true)
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
      <form>
        {submitForm && <p>Registered Successfully!!!</p>}
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
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
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
        <button
          className="btn"
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </form>
    </Modal>
  );
};

export default SignUp;
