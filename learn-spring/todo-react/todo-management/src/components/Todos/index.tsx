import { FC, useMemo } from "react";
import { useParams } from "react-router-dom";

const Todos: FC = () => {
  const todos = [
    { id: 1, description: "Learn AWS" },
    { id: 1, description: "Learn Fullstack Dev" },
    { id: 1, description: "Learn DevOps" },
  ];

  return (
    <div className="list-todo">
      <h1>Things You Want To Do!</h1>
      <div>
        <table>
          <thead>
            <tr>
              <td>id</td>
              <td>description</td>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todos;
