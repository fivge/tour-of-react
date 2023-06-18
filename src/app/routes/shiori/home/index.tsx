import { useEffect, useState } from "react";

import Tags from "../components/tags";
import Pagging from "../components/pagging";
import Bookmarks from "../components/bookmarks";

import api from "../api";
import { ITag } from "../shared/shiori.interface";
import N from "./nodes";

const Home = () => {
  const [tag, setTag] = useState("all");
  const { data: tags = [], error, isLoading } = api.useTags<ITag[]>();
  const { data: bookmarks = {}, error: berror, isLoading: bookmarksLoading } = api.useBookmarks<any>({ tags: tag });

  useEffect(() => {
    // matrixParams
    init();
  }, []);

  const init = () => {};

  const onTagChange = tag => {
    const { type, name } = tag;
    if (["all", "untagged", "tagged"].includes(type)) {
      setTag(type);
    } else {
      setTag(name);
    }
  };

  return (
    <>
      <N.Home>
        <N.Tags>
          <Tags list={tags} onChange={onTagChange} />
        </N.Tags>
        <N.Bookmarks>
          <Pagging params={bookmarks}>
            <Bookmarks list={bookmarksLoading ? new Array(1).fill("1") : bookmarks?.bookmarks} loading={bookmarksLoading} />
          </Pagging>
        </N.Bookmarks>
      </N.Home>
    </>
  );
};

export default Home;
