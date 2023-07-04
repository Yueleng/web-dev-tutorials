import { FC, useCallback, useEffect, useMemo, useState } from "react";
import {
  retrieveAllTodosForUsernameApi,
  deleteTodoApi,
} from "../../api/TodoApiService";
import { useAuth } from "../../hooks/useAuth";

const Todos: FC = () => {
  // const today = useMemo(() => new Date(), []);

  // const targetDate = useMemo(
  //   () => new Date(today.getFullYear(), today.getMonth(), today.getDay()),
  //   [today]
  // );

  // const todos = useMemo(
  //   () => [
  //     { id: 1, description: "Learn AWS", done: false, targetDate },
  //     { id: 2, description: "Learn Fullstack Dev", done: false, targetDate },
  //     { id: 3, description: "Learn DevOps", done: false, targetDate },
  //   ],
  //   [targetDate]
  // );

  const authCtx = useAuth();

  const [todos, setTodos] = useState<
    {
      id: number;
      description: string;
      done: boolean;
      targetDate: Date;
    }[]
  >([]);

  const [message, setMessage] = useState<string | null>(null);

  const refreshTodos = useCallback(() => {
    retrieveAllTodosForUsernameApi(authCtx.username)
      .then((response) => setTodos(response.data))
      .catch((error) => {
        setTodos([]);
        console.error(error);
      });
  }, [authCtx.username]);

  useEffect(() => {
    refreshTodos();
  }, [refreshTodos]);

  const deleteTodo = (name: string, id: string) => {
    deleteTodoApi(name, id)
      .then(
        () => {
          setMessage(`Delete of todo with id = ${id} successful`);
          refreshTodos();
        }
        //1: Display message
        //2: Update Todos list
      )
      .catch((error) => console.log(error));
  };

  return (
    <div className="container list-todo">
      <h1>Things You Want To Do!</h1>
      {message && <div className="alert alert-warning">{message}</div>}
      <div>
        <table className="table">
          <thead>
            <tr>
              <td>id</td>
              <td>description</td>
              <td>isDone</td>
              <td>Target Date</td>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{`${todo.done}`}</td>
                <td>{todo.targetDate.toDateString()}</td>
                <td>
                  {" "}
                  <button
                    className="btn btn-warning"
                    onClick={() =>
                      deleteTodo(authCtx.username, String(todo.id))
                    }
                  >
                    Delete
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todos;
