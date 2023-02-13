import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import external packages
import "../node_modules/bootstrap/dist/css/bootstrap.css";

//import component
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import PageNotFound from "./components/pages/PageNotFound";
import AddUsers from "./components/users/AddUsers";
import EditUsers from "./components/users/EditUsers";
import ViewUsers from "./components/users/ViewUsers";
import Navbar from "./Layout/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/users/add" element={<AddUsers/>}/>
          <Route exact path="/users/editUser/:user_id" element={<EditUsers/>}/>
          <Route exact path="/users/:user_id" element={<ViewUsers/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
