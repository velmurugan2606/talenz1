import React from "react";
import Navbar from "./Component/Navbar";
import Banner from "./Page/Home/Banner";
import Cart from "./Page/Home/Cart";
import { Route, Routes } from "react-router-dom";
import Main from "./Main/Main";
import Home from "./Home";
import Submit from "./Submit";
// import content from "./main/content";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/Submit" element={<Submit></Submit>}></Route>

        {/* {<Route path='/content'element={<content></content>}></Route>} */}
      </Routes>

      {/* <Banner />
      <Cart /> */}
    </div>
  );
}

export default App;
