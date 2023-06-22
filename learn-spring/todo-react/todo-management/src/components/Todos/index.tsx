import { FC, useMemo } from "react";

const Todos: FC = () => {
  const today = useMemo(() => new Date(), []);

  const targetDate = useMemo(
    () => new Date(today.getFullYear(), today.getMonth(), today.getDay()),
    [today]
  );

  const todos = useMemo(
    () => [
      { id: 1, description: "Learn AWS", done: false, targetDate },
      { id: 1, description: "Learn Fullstack Dev", done: false, targetDate },
      { id: 1, description: "Learn DevOps", done: false, targetDate },
    ],
    [targetDate]
  );

  return (
    <div className="container list-todo">
      <h1>Things You Want To Do!</h1>
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todos;
