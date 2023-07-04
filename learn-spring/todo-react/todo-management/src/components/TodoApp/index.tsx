import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";
import { AuthenticatedRoute } from "../AuthenticatedRoute";
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
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/welcome/:username"
              element={
                <AuthenticatedRoute>
                  <Welcome />
                </AuthenticatedRoute>
              }
            ></Route>
            <Route
              path="/todos"
              element={
                <AuthenticatedRoute>
                  <Todos />
                </AuthenticatedRoute>
              }
            ></Route>
            <Route
              path="/todo/:id"
              element={
                <AuthenticatedRoute>
                  <Todo />
                </AuthenticatedRoute>
              }
            ></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
};

export default TodoApp;
