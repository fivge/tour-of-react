import { memo } from "react";

import Bookmark from "../bookmark";

import { IBookmark } from "../../shared/shiori.interface";
import N from "./nodes";

const Bookmarks = (props: { list: IBookmark[]; onChange?: any }) => {
  const { list, onChange } = props;

  return (
    <>
      <N.Bookmarks>
        {list.map(item => (
          <Bookmark key={item.id} item={item} />
        ))}
      </N.Bookmarks>
    </>
  );
};

export default memo(Bookmarks);
