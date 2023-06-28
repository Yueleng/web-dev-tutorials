import { FC } from "react";
import { useAuth } from "../../hooks/useAuth";

const Footer: FC = () => {
  const authContext = useAuth();
  return (
    <footer className="footer">
      <div className="container">
        <hr />
        It's Footer
      </div>
    </footer>
  );
};

export default Footer;
