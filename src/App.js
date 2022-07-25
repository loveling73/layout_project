import "antd/dist/antd.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes/index';
import './App.css';
import "./index.css";



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={

                  <Page />

                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
