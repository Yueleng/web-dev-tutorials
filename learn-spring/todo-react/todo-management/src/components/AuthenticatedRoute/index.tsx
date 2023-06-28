import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const AuthenticatedRoute = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return children;
  }
  navigate("/");
  return <></>;
};
