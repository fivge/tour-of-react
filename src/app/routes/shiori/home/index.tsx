import { useEffect } from "react";
import { useAuth } from "../shared/store";

const Home = () => {
  const session = useAuth(state => state.session);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    console.log("session", session);
  };

  return <>hhh</>;
};

export default Home;
