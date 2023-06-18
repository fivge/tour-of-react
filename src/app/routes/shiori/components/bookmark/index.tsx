import { memo } from "react";
import { Card, CardActionArea, CardActions, CardContent, CardHeader, Link, Skeleton, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { formatDistance } from "date-fns";
import { zhCN as zhCNLocale } from "date-fns/locale";

import { IBookmark, ITag } from "../../shared/shiori.interface";
import N from "./nodes";

const now = new Date();

const Bookmark = (props: { item: IBookmark; [x: string]: any }) => {
  const { item, loading } = props;

  const host = !loading && new URL(item.url).host;

  const date = !loading && formatDistance(new Date(item.modified), now, { addSuffix: true, locale: zhCNLocale });

  const onClick = () => {
    window.open(item.url, "_blank");
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
            <CardActionArea>
              <CardActions>
                <div>123</div>
                <div>123</div>
                <div>123</div>
                <div>123</div>
              </CardActions>
            </CardActionArea>
          </div>
        </Card>
      )}
    </>
  );
};

export default memo(Bookmark);
