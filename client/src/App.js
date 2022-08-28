import { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ReactSwitch from "react-switch";

import "./App.css";
import Header from "./components/Header";
import NotePage from "./pages/NotePage";
import NotesListPage from "./pages/NotesListPage";

import { ReactComponent as LightIcon } from "./assets/sun.svg";
import { ReactComponent as DarkIcon } from "./assets/moon.svg";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <div className="app" id={theme}>
        <div className="app-header-container">
          <Header />
          <ReactSwitch
            onChange={toggleTheme}
            checked={theme === "dark"}
            checkedIcon={<DarkIcon />}
            onColor="#2e2ed1"
            uncheckedIcon={<LightIcon />}
            offColor="#ffbf27"
          />
        </div>
        <Routes>
          <Route exact path="/" element={<NotesListPage />} />
          <Route path="/note/:id" element={<NotePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
