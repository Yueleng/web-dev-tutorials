import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login";
import Welcome from "../Welcome";

const TodoApp: FC = () => {
  return (
    <div className="todo">
      {/* Todo Management Application */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/welcome" element={<Welcome />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default TodoApp;