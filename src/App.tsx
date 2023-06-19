import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Study from './pages/Study/Study';
import Interview from './pages/Interview/Interview'
import Ranking from "./pages/Ranking/Ranking";
import SelectPages from "./pages/SelectPages/SelectPages";
import Mypage from "./pages/MyPage/Mypage";
import Login from "./pages/Login/Login";
import SelectLanguageComponent from "./pages/Quiz/selectLanguageComponent";
import store from "./Redux/ReduxStore";
import {Provider} from "react-redux";
function App(): JSX.Element {
  return (
    <>
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Quiz" element={<Quiz />} />
            <Route path="/SelectLanguageComponent" element={<SelectLanguageComponent />} />
            <Route path="/Interview" element={<Interview />} />
            <Route path="/Study" element={<Study />} />
            <Route path="/Ranking" element={<Ranking />} />
          <Route path="/Mypage" element={<Mypage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SelectPages" element={<SelectPages />} />
        </Routes>
      </Router>
      </Provider>
    </>
  );
}

export default App;