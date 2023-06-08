import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/MainContent";
import Dialogs from "./components/Dialogs/Dialogs";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        {/* Отрисовываю новую компоненту без экспорта, с помощью тега */}
        <Header />
        <Nav />
        {/* Див-шаблон для многостраничности, куда можно вставлять любую Main-компоненту с изменяемым центровым контентом */}
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile" element={<Main />} />
            <Route path="/dialogs/*" element={<Dialogs />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
