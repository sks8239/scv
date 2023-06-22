import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/QuizPage';
import Study from './pages/Study';
import Interview from './pages/Interview'
import Ranking from "./pages/Ranking";
import FunctionSelectPage from "./pages/FunctionSelectPage";
import Mypage from "./pages/MyPage";
import LoginPage from "./pages/LoginPage";
import SelectLanguage from "./pages/SelectLanguagePage";
import ResultPage from "./pages/ResultPage";
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
            <Route path="/Result" element={<ResultPage />} />
            <Route path="/SelectLanguage" element={<SelectLanguage />} />
            <Route path="/Interview" element={<Interview />} />
            <Route path="/Study" element={<Study />} />
            <Route path="/Ranking" element={<Ranking />} />
          <Route path="/my-page" element={<Mypage />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/FunctionSelectPage" element={<FunctionSelectPage />} />
        </Routes>
      </Router>
      </Provider>
    </>
  );
}

export default App;