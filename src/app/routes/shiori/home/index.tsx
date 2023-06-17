import { useEffect } from "react";

import Tags from "../components/tags";
import Pagging from "../components/pagging";
import Bookmarks from "../components/bookmarks";

import { useAuth } from "../shared/store";
import api from "../api";
import { Tag } from "../shared/shiori.interface";
import N from "./nodes";

const Home = () => {
  const session = useAuth(state => state.session);
  const { data: tags = [], error, isLoading } = api.useTags<Tag[]>();
  const { data: bookmarks = {}, error: berror, isLoading: bloading } = api.useBookmarks<any>({ tags: "shiori" });

  useEffect(() => {
    init();
  }, []);

  const init = () => {};

  const onTagChange = item => {
    console.log(item);
  };

  return (
    <>
      <N.Home>
        <N.Tags>
          <Tags list={tags} onChange={onTagChange} />
        </N.Tags>
        <N.Bookmarks>
          <Pagging params={bookmarks}>
            <Bookmarks list={bookmarks?.bookmarks || []} />
          </Pagging>
        </N.Bookmarks>
      </N.Home>
    </>
  );
};

export default Home;
