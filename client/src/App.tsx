import React from "react";
import { useSelector } from "react-redux";
import MainPage from "./components/mainPage/mainPage";
import store from "./store/store";

const App = () => {
  const state = useSelector((state) => state);
  return <MainPage />;
};

export default App;
