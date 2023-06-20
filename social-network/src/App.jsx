import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = ({state, dispatch}) => {

  return (
      <div className="app__wrapper">
        <Header />
        <NavBar />
        <div className="app__wrapper-content">
          <Routes>
            <Route path="/profile" element={<Profile state={state.profilePage} dispatch={dispatch}/> } />
            <Route path="/dialogs/*" element={<Dialogs state={state.dialogsPage} dispatch={dispatch} />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
  );
};

export default App;
