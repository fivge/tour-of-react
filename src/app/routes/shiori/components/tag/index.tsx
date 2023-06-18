import { memo, useRef, useState } from "react";
import { Badge, FormControl, IconButton, Input, InputAdornment, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useHover } from "@uidotdev/usehooks";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";

import { ITag } from "../../shared/shiori.interface";
import api from "../../api";
import Message from "../message";

const Tag = (props: { item: ITag & { type?: string }; [x: string]: any }) => {
  const { item, onClick, selected, onUpdate } = props;
  const [ref, hovering] = useHover();
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(item.name);
  const { trigger, isMutating } = api.useTagsUpdate();
  const message = useRef(null);

  const onEdit = () => {
    setIsEdit(true);
  };

  const onInput = e => {
    const { value } = e.target;
    setValue(value);
  };

  const onEditSubmit = async () => {
    try {
      const params = {
        id: item.id,
        name: value,
      };
      await trigger(params);
      message.current.open({ level: "success", message: "保存成功!" });
      setIsEdit(false);
      onUpdate();
    } catch (error) {
      message.current.open({ level: "error", message: "操作失败!" });
    }
  };

  const onEditCancel = () => {
    setIsEdit(false);
  };

  return (
    <>
      <ListItem
        key={item.id}
        ref={ref}
        disablePadding
        secondaryAction={
          <div>
            {isEdit ? (
              <IconButton size="small" onClick={onEditCancel}>
                <ClearOutlinedIcon />
              </IconButton>
            ) : !item.type && hovering ? (
              <IconButton aria-label="delete" size="small" onClick={onEdit}>
                <DriveFileRenameOutlineOutlinedIcon />
              </IconButton>
            ) : (
              <Badge badgeContent={item.nBookmarks} color="primary" sx={{ mr: 2 }} />
            )}
          </div>
        }
      >
        {isEdit ? (
          <FormControl sx={{ m: "8px 16px", width: "25ch" }} variant="standard" onChange={onInput}>
            <Input
              id="standard-adornment-password"
              type="text"
              defaultValue={item.name}
              endAdornment={
                <InputAdornment position="end">
                  {!isMutating ? (
                    <IconButton aria-label="toggle password visibility" onClick={onEditSubmit}>
                      <CheckOutlinedIcon />
                    </IconButton>
                  ) : (
                    <HourglassBottomOutlinedIcon />
                  )}
                </InputAdornment>
              }
            />
          </FormControl>
        ) : (
          <ListItemButton selected={selected === item.id} onClick={() => onClick(item)}>
            <ListItemText primary={item.name} />
          </ListItemButton>
        )}
      </ListItem>
      <Message ref={message} />
    </>
  );
};

export default memo(Tag);
