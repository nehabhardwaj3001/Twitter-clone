import { Modal } from "antd";
import React, { useState } from "react";
import { FaComment, FaRetweet, FaHeart, FaShare } from "react-icons/fa";

const CommentModal = ({ openModal, setOpenModal }) => {
  const [clicked, setClicked] = useState(false);
  const handleCancel = () => {
    setOpenModal(false);
  };

  return (
    <Modal
      open={openModal}
      onCancel={handleCancel}
      footer={null}
      cancelButtonProps={{ style: { display: "none" } }}
      okButtonProps={{ style: { display: "none" } }}
    >
      <div className="create-input">
        <input
          type="text"
          className="twt"
          placeholder="Tweet Your Reply"
          onChange={""}
        />
      </div>
      <div className="create-second">
        <div className="create-icons">
          <FaComment className="icon" />
          <FaRetweet className="icon" />
          <FaHeart
            className={`icon ${clicked ? "liked" : ""}`}
            onClick={() => {
              setClicked(!clicked);
            }}
          />
          <FaShare className="icon" />
        </div>
        <div className="create-btn">
          <button>Reply</button>
        </div>
      </div>
    </Modal>
  );
};

export default CommentModal;
