import styled from "@emotion/styled";

const Home = styled.div`
  background: #f5f5f5;
  height: 100vh;
  padding: 12px;

  display: flex;
  column-gap: 32px;
`;

const Tags = styled.div`
  width: 300px;
`;

const Bookmarks = styled.div`
  flex: 1;

  height: 100%;
  overflow-y: auto;
`;

export default { Home, Tags, Bookmarks };
