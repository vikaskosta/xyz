// import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Home from "./Home/Home";
// import Author_Login from "./author_Login/Author_Login";
// import List from "./list/List";
// import Single from "./single/Single";
// import New from "./new/New";
import Login from "./login";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="author_Login" element={<Author_Login />} />
          <Route path="users">
            <Route index element={<List />}/>
            <Route path=":userId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
          <Route path="products">
            <Route index element={<List />}/>
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Route>
      </Routes> */}
      <Login />
    </>
  );
}

export default App;
