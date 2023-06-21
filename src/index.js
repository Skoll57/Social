import reportWebVitals from "./reportWebVitals";
import rerenderEntireTree from "./render";
import state from "./Redux/State";

rerenderEntireTree(state);

reportWebVitals();
