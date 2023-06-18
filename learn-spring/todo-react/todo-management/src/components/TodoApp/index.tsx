import { FC } from "react";
import Login from "../Login";
import Welcome from "../Welcome";

const TodoApp: FC = () => {
  return (
    <div className="todo">
      Todo Management Application
      <Login />
      <Welcome />
    </div>
  );
};

export default TodoApp;
