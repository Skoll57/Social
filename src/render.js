import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  addPost,
  updateNewPostText,
  updateMessageText,
  addMessage,
} from "./Redux/State";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  root.render(
    <App
      state={state}
      addPost={addPost}
      addMessage={addMessage}
      updateNewPostText={updateNewPostText}
      updateMessageText={updateMessageText}
    />
  );
};

export default rerenderEntireTree;
