import { Badge, List, ListItem, ListItemButton, ListItemText, Paper } from "@mui/material";
import { memo, useEffect, useState } from "react";
import { ITag } from "../../shared/shiori.interface";

const Tags = (props: { list: ITag[]; onChange: (tag: ITag) => void }) => {
  const { list, onChange } = props;
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
      <Paper elevation={12} sx={{ height: "100%" }}>
        <List>
          {innerList.map(item => (
            <ListItem
              key={item.id}
              disablePadding
              secondaryAction={<Badge badgeContent={item.nBookmarks} color="primary" />}
              onClick={() => onClick(item)}
            >
              <ListItemButton selected={selected === item.id}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Paper>
    </>
  );
};

export default memo(Tags);
