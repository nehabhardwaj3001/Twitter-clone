import React, { useState } from "react";
import { Modal } from "antd";
import { FaTwitter } from "react-icons/fa";
import "../components/styles/SignIn.css";

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
	const [details, setDetails] = useState({
    email: "",
    password: "",
  });
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
      <h1 className="heading">Sign in to Twitter</h1>
      <form>
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
        <button className="btn" type="submit" variant="contained" color="primary">
          Sign Up
        </button>
      </form>
    </Modal>
  );
};

export default Login;
