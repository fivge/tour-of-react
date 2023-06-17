import { Badge, List, ListItem, ListItemButton, ListItemText, Paper } from "@mui/material";
import { memo } from "react";
import { Tag } from "../../shared/shiori.interface";

const Tags = (props: { list: Tag[]; [x: string]: any }) => {
  const { list, onChange } = props;

  const onClick = item => {
    onChange?.(item);
  };

  return (
    <>
      <Paper elevation={12} sx={{ height: "100%" }}>
        <List>
          {list.map(item => (
            <ListItem
              key={item.id}
              disablePadding
              secondaryAction={<Badge badgeContent={item.nBookmarks} color="primary" />}
              onClick={() => onClick(item)}
            >
              <ListItemButton>
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
