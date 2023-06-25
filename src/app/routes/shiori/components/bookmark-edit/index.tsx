import { memo, useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import N from "./nodes";
import api from "../../api";
import Message from "../message";

const deepClone = value => JSON.stringify(JSON.parse(value));

const BookmarkEdit = props => {
  const { value: bookmark, tags: tagList, open, onClose } = props;
  const { url, title, excerpt, tags } = bookmark;
  const tag = tags?.[0]?.name || "";
  const [fields, setFields] = useState({ url, title, excerpt, tag });
  const { trigger, isMutating } = api.useBookmarkUpdate();
  const message = useRef(null);

  const onChange = (value, type) => {
    setFields(newFields => ({ ...newFields, [type]: value }));
  };

  const onInnerConfirm = async () => {
    try {
      const tags = fields.tag === "" ? [] : [{ name: fields.tag }];
      const params = { ...fields, id: bookmark.id, tags };
      delete params.tag;
      await trigger(params);
      message.current.open({ level: "success", message: "保存成功!" });
      onClose(true);
    } catch (error) {
      message.current.open({ level: "error", message: "操作失败!" });
    }
  };

  return (
    <>
      <Dialog open={open} onClose={() => onClose()}>
        <DialogTitle>编辑书签</DialogTitle>
        <DialogContent>
          <N.Fields>
            <TextField
              sx={{ width: 300 }}
              label="URL"
              variant="standard"
              defaultValue={url}
              onChange={e => onChange(e.target.value, "url")}
            />
            <TextField
              sx={{ width: 300 }}
              label="标题"
              variant="standard"
              defaultValue={title}
              onChange={e => onChange(e.target.value, "title")}
            />
            <TextField
              sx={{ width: 300 }}
              label="摘要"
              variant="standard"
              defaultValue={excerpt}
              multiline
              maxRows={3}
              onChange={e => onChange(e.target.value, "excerpt")}
            />
            <FormControl variant="standard" sx={{ width: 300 }}>
              <InputLabel id="tags">Tags</InputLabel>
              <Select defaultValue={tag} onChange={e => onChange(e.target.value, "tag")}>
                <MenuItem value="">
                  <em>未分类</em>
                </MenuItem>
                {tagList.map(tag => (
                  <MenuItem value={tag.name}>{tag.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </N.Fields>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => onClose()}>取消</Button>
          <Button onClick={onInnerConfirm}>确认</Button>
        </DialogActions>
      </Dialog>
      <Message ref={message} />
    </>
  );
};

export default memo(BookmarkEdit);
