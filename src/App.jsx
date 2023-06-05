import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/MainContent";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
  return (
    <div className="App-wrapper">
      {/* Отрисовываю новую компоненту без экспорта, с помощью тега */}
      <Header />
      <Nav />
      {/* Див-шаблон для многостраничности, куда можно вставлять любую Main-компоненту с изменяемым центровым контентом */}
      <div className="app-wrapper-content">
        <Dialogs />
        {/* <Main /> */}
      </div>
    </div>
  );
};

export default App;
