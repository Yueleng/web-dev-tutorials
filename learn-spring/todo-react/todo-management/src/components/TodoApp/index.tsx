import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login";
import Welcome from "../Welcome";
import Todos from "../Todos";
import Error from "../Error";
import Header from "../Header";
import Footer from "../Footer";
import Logout from "../Logout";

const TodoApp: FC = () => {
  return (
    <div className="todo">
      {/* Todo Management Application */}
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/welcome/:username" element={<Welcome />}></Route>
          <Route path="/todos" element={<Todos />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default TodoApp;
