import { FC } from "react";
import { Link, useParams } from "react-router-dom";

const Welcome: FC = () => {
  const { username } = useParams();
  return (
    <div className="welcome">
      <h1>Welcome: {username}</h1>
      <div>
        Mange your todos - <Link to="/todos">Go here</Link>
      </div>
    </div>
  );
};

export default Welcome;
