import { useEffect } from "react";

import { useAuth } from "../shared/store";
import Tags from "../components/tags";
import api from "../api";
import { Tag } from "../shared/shiori.interface";

import "./index.less";

const Home = () => {
  const session = useAuth(state => state.session);
  const { data: tags = [], error, isLoading } = api.useTags<Tag[]>();

  console.log("data", tags, error, isLoading);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    console.log("session", session);
  };

  return (
    <>
      <div className="home">
        <div className="tags">
          <Tags list={tags} />
        </div>
        <div>123</div>
      </div>
    </>
  );
};

export default Home;
