import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

//Data
let posts = [
  { message: "Hi! What are you doing?", likeCount: 13, dislikeCount: 3 },
  { message: "Hello! I'am testing props.", likeCount: 23, dislikeCount: 5 },
  { message: "It turns out?", likeCount: 8, dislikeCount: 1 },
  {
    message:
      "I'm moving towards my goal with small steps... And i need more word! More! more! more! I'm moving towards my goal with small steps... And i need more word! More! more! more!",
    likeCount: 14,
    dislikeCount: 2,
  },
  { message: "I'm happy for you!", likeCount: 1, dislikeCount: 0 },
];

let dialogs = [
  { id: 1, name: "Skoll" },
  { id: 2, name: "Ivan" },
  { id: 3, name: "Julia" },
  { id: 4, name: "Vovka" },
  { id: 5, name: "Nikita" },
  { id: 6, name: "Elen" },
];

let messages = [
  { id: 1, message: "HI" },
  { id: 2, message: "HELLO" },
  { id: 3, message: "HEY" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
