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
              <Main mainPage={props.state.mainPage} dispatch={props.dispatch} />
            }
          />
          <Route
            path="/dialogs/*"
            element={
              <Dialogs
                dialogsPage={props.state.dialogsPage}
                avatar={props.state.persone}
                dispatch={props.dispatch}
              />
            }
          />
          <Route
            path="/friend/*"
            element={<Friends friendsPage={props.state.friendsPage} />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
