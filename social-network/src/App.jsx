import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = ({store}) => {
  return (
      <div className="app__wrapper">
        <Header />
        <NavBar />
        <div className="app__wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile store={store}/>} />
            <Route path="/dialogs/*" element={<DialogsContainer store={store}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
  );
};

export default App;
