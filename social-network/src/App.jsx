import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import Settings from "./components/Settings/Settings";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = ({store}) => {
  return (
      <div className="app__wrapper">
        <Header />
        <NavBar />
        <div className="app__wrapper-content">
          <Routes>
            <Route path="/profile/:id" element={<ProfileContainer />} />
            <Route path="/profile/" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
  );
};

export default App;
