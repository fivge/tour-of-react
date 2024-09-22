import styled from "@emotion/styled";

const Login = styled.div`
  margin-top: 200px;

  display: flex;
  justify-content: center;

  .fields {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  /* flex-direction: column; */
  /* gap: 8px; */
`;

export default { Login, Card, Bottom };
