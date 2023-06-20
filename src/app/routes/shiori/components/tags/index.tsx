import { List, Paper } from "@mui/material";
import { memo, useEffect, useState } from "react";

import { ITag } from "../../shared/shiori.interface";
import Tag from "../tag";

const Tags = (props: { list: ITag[]; onChange: (tag: ITag) => void; [x: string]: any }) => {
  const { list, onChange, onUpdate } = props;
  const [innerList, setInnerList] = useState([]);
  const [selected, setSelected] = useState<string | number>("all");

  useEffect(() => {
    const newList = [
      {
        id: "all",
        name: "全部",
        type: "all",
      },
      ...list,
      {
        id: "untagged",
        name: "未分类",
        type: "untagged",
      },
      {
        id: "tagged",
        name: "已分类",
        type: "tagged",
      },
    ];

    setInnerList(newList);
  }, [list]);

  const onClick = (tag: ITag) => {
    setSelected(tag.id);
    onChange(tag);
  };

  return (
    <>
      <Paper
        elevation={12}
        sx={{
          height: "100%",
          background: `url(https://pic.0x64.ml/a3e6e0a8993b4c9806159d16e0b911fd.gif)  bottom center/contain no-repeat`,
        }}
      >
        <List>
          {innerList.map(item => (
            <Tag key={item.id} item={item} selected={selected} onClick={onClick} onUpdate={onUpdate} />
          ))}
        </List>
      </Paper>
    </>
  );
};

export default memo(Tags);
