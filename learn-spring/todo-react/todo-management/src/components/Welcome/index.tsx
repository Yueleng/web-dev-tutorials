import { FC } from "react";
import { Link, useParams } from "react-router-dom";

const Welcome: FC = () => {
  const { username } = useParams();
  return (
    <div className="welcome">
      Welcome in: {username}
      <div>
        Mange your todos - <Link to="/todos">Go here</Link>
      </div>
    </div>
  );
};

export default Welcome;
