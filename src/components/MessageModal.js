import React from "react";
import { Modal } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import '../components/styles/Messages.css';

const MessageModal = ({ isModalOpen, setIsModalOpen }) => {
	
  console.log("+++++++++++++++++", isModalOpen);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      className="msg-modal"
      open={isModalOpen}
      onCancel={handleCancel}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
    >
			<div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
				<h2>New message</h2>
				<button className="next-btn">Next</button>
			</div>
			<div className="data">
				<SearchOutlined style={{ fontSize: '20px', color: 'rgb(83, 100, 113);' }}/>
				<input
            type="text"
            name="tweet"
            className="create-control"
            placeholder= "Search People"
          />
			</div>
    </Modal>
  );
};

export default MessageModal;
