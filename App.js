import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";


import ContactUs from "./components/contactUs/ContactUs";
import Login from "./components/login/Login";
import About from "./components/about/About";
import Error from "./components/error/Error";


function App() {

  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />

          <Route path="*" element={<Error />}/>
        </Route>
      </Routes>

    </>
  );
}

export default App;
