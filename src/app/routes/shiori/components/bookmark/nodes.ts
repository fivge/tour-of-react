import styled from "@emotion/styled";

const Bookmark = styled.div``;

const Title = styled.span`
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const Content = styled.div`
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  overflow: hidden;
`;

const Tags = styled.div``;

const Tag = styled.div``;

export default { Bookmark, Title, Tags, Tag, Content };
