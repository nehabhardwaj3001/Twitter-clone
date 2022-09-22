import React, { useState } from "react";
import "../components/styles/createTweet.css";
import {
  FaRegImage,
  FaRegListAlt,
  FaRegSmile,
  FaRegCalendarCheck,
} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addTweets, closeModal } from "../redux/actions/PostAction";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

const CreateTweet = () => {
  const [file, setFile] = useState(null);
  const [clicked, setClicked] = useState(false);
  const handleFileChange = (file) => {
    setFile(file);
  };

  const dispatch = useDispatch();
  const [tweet, setTweet] = useState({ msg: " ", image: "" });

  const handleChange = (e) => {
    setTweet({ ...tweet, [e.target.name]: e.target.value });
  };
  const handleURLChange = (e) => {
    setTweet({ ...tweet, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    dispatch(addTweets(tweet));
    dispatch(closeModal());
  };

  return (
    <div className="create">
      <div className="create-first">
        <div className="create-img">
          <img src="/images/image.jpeg" alt="Profile" />
        </div>
        <div className="create-input">
          <input
            type="text"
            name="tweet"
            className="create-control"
            placeholder="What's Happening?"
            onChange={handleChange}
          />
        </div>
      </div>
      <input
        name="tweetImage"
        className="createTweet_imageInput"
        placeholder="Optional: Enter Image URL"
        // type="file"
        // value='tweetImage'
        onChange={handleURLChange}
      />
      <div className="create-second">
        <div className="icon-img">
          <FileUploader
            handleChange={handleFileChange}
            name="file"
            types={fileTypes}
          />
        </div>
        <div className="create-icons">
          <FaRegListAlt className="icon" />
          <FaRegSmile className="icon" />
          <FaRegCalendarCheck className="icon" />
        </div>
        <div className="create-btn">
          <button onClick={handleClick}>Tweet</button>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
