import { memo, useState } from "react";
import { Card, CardActionArea, CardActions, CardContent, CardHeader, IconButton, Link, Skeleton, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { formatDistance } from "date-fns";
import { zhCN as zhCNLocale } from "date-fns/locale";
import BlurOnIcon from "@mui/icons-material/BlurOn";

import { IBookmark, ITag } from "../../shared/shiori.interface";
import N from "./nodes";
import BookmarkEdit from "../bookmark-edit";

const now = new Date();

const Bookmark = (props: { item: IBookmark; [x: string]: any }) => {
  const { item, loading, tags, onUpdate } = props;

  const host = !loading && new URL(item.url).host;

  const date = !loading && formatDistance(new Date(item.modified), now, { addSuffix: true, locale: zhCNLocale });

  const [openEdit, setOpenEdit] = useState(false);

  const onClick = () => {
    window.open(item.url, "_blank");
  };

  const onEditOpen = () => {
    setOpenEdit(true);
  };

  const onEdit = (status = false) => {
    setOpenEdit(false);
    // TODO: 与分页配合, 增量更新
    if (status) {
      onUpdate();
    }
  };

  return (
    <>
      {loading ? (
        <Skeleton variant="rectangular" width={300} height={300} />
      ) : (
        <Card
          elevation={6}
          square
          sx={{ width: 300, height: 300, padding: 2, display: "flex", flexDirection: "column", justifyContent: "space-between", rowGap: 1 }}
        >
          <CardHeader
            title={
              <Link underline="hover" variant="subtitle1" sx={{ color: "inherit", cursor: "pointer" }} onClick={onClick}>
                <N.Title title={item.title}>{item.title}</N.Title>
              </Link>
            }
            subheader={
              <N.Tags>
                {item.tags.map(tag => (
                  <N.Tag key={tag.id}>{tag.name}</N.Tag>
                ))}
              </N.Tags>
            }
            sx={{ padding: 0 }}
          />
          <div
            css={css`
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            `}
          >
            <CardContent sx={{ padding: 0, flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <Typography variant="body2" gutterBottom sx={{ flex: 1 }}>
                <N.Content>{item.excerpt}</N.Content>
              </Typography>
              <Typography
                variant="caption"
                gutterBottom
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>{host}</div>
                <div>{date}</div>
              </Typography>
            </CardContent>
            {/* <CardActionArea>
            </CardActionArea> */}
            <CardActions sx={{ p: 0 }}>
              <IconButton onClick={onEditOpen}>
                <BlurOnIcon />
              </IconButton>
            </CardActions>
          </div>
        </Card>
      )}
      {openEdit && <BookmarkEdit open={openEdit} value={item} tags={tags} onClose={onEdit} />}
    </>
  );
};

export default memo(Bookmark);
