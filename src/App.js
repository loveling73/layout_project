import logo from './logo.svg';
import './App.css';
import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import Login from "./auth/Login"
import ForgetPassword from "./auth/ForgetPassword"
import ResetPassword from "./auth/ResetPassword"
import Product from './components/Products/Product';
function App() {
  return (
    <>
      {/* <Login/>
      <ForgetPassword/>
      <ResetPassword/> */}
      <Product />
    </>
  );
}

export default App;
