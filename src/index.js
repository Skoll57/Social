import store from "./Redux/State";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        addMessage={store.addMessage.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
        updateMessageText={store.updateMessageText.bind(store)}
      />
    </BrowserRouter>
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
