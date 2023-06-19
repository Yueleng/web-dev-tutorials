import { FC } from "react";
import { useParams } from "react-router-dom";

const Welcome: FC = () => {
  const { username } = useParams();
  return <div className="welcome">Welcome in: {username}</div>;
};

export default Welcome;
