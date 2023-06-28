import state from "./Redux/State";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
  addPost,
  addMessage,
  updatePostText,
  updateMessageText,
  subscribe,
} from "./Redux/State";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        addMessage={addMessage}
        updateNewPostText={updatePostText}
        updateMessageText={updateMessageText}
      />
    </BrowserRouter>
  );
};

subscribe(rerenderEntireTree);

rerenderEntireTree(state);
