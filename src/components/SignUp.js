import React, { useState } from "react";
import { Modal } from "antd";
import { FaTwitter } from "react-icons/fa";
import "../components/styles/SignIn.css";

const SignUp = () => {
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(true);
  const handleCancel = () => {
    setIsModalOpen(false);
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
        <button className="btn" type='submit' variant='contained' color='primary' >Sign Up</button>
      </form>
    </Modal>
  );
};

export default SignUp;
