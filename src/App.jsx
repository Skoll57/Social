import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/MainContent";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <div className="main">
      <Header />
      <Nav />
      <div className="main__routes">
        <Routes>
          <Route
            path="/profile"
            element={
              <Main
                mainPage={props.state.mainPage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
              />
            }
          />
          <Route
            path="/dialogs/*"
            element={
              <Dialogs
                dialogsPage={props.state.dialogsPage}
                avatar={props.state.persone}
                addMessage={props.addMessage}
                updateMessageText={props.updateMessageText}
              />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/friend/*"
            element={<Friends state={props.state.friendsPage} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
