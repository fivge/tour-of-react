import { memo } from "react";

import Bookmark from "../bookmark";

import { IBookmark } from "../../shared/shiori.interface";
import N from "./nodes";

const Bookmarks = (props: { list: IBookmark[]; onChange?: any; loading: boolean; [x: string]: any }) => {
  const { list = [], loading, tags, onUpdate } = props;

  return (
    <>
      <N.Bookmarks>
        {list.map((item, index) => (
          <Bookmark key={item.id || index} item={item} loading={loading} tags={tags} onUpdate={onUpdate} />
        ))}
      </N.Bookmarks>
    </>
  );
};

export default memo(Bookmarks);
