import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../shared/auth.store";

const Start = () => {
  const session = useAuth(state => state.session);
  const navigate = useNavigate();

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    if (!session) {
      navigate("./login");
    } else {
      navigate("./home");
    }
  };

  return <></>;
};

export default Start;
