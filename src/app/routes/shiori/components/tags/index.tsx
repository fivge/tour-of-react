import { Badge, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { memo } from "react";
import { Tag } from "../../shared/shiori.interface";

const Tags = (props: { list: Tag[] }) => {
  const { list } = props;

  return (
    <>
      <List>
        {list.map(item => (
          <ListItem key={item.id} disablePadding secondaryAction={<Badge badgeContent={item.nBookmarks} color="primary" />}>
            <ListItemButton>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default memo(Tags);
