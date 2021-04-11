import React from "react";
import { useSelector } from "react-redux";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  const state = useSelector((state) => state);
  return <Dashboard />;
};

export default App;
