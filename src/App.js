import logo from './logo.svg';
import './App.css';
import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import Login from "./auth/Login"
import ForgetPassword from "./auth/ForgetPassword"
import ResetPassword from "./auth/ResetPassword"
import Product from './components/Products/Product';
import Depot from './components/Depots/Depot';
import ModalNewDepot from './components/Depots/ModalNewDepot';




function App() {
  return (
    <div>
      {/* <Login/> */}
      {/* <ForgetPassword/> */}
      {/* <ResetPassword/> */}
      <Product />
      {/* <Depot /> */}
      {/* <ModalNewDepot /> */}
    </div>
  );
}

export default App;
