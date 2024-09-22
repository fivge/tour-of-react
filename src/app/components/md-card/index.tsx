import { memo } from "react";
import "mdui/components/card.js";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledMdCard = styled("mdui-card")`
  padding-left: 16px;
  padding-right: 16px;
  margin: 8px;
  background-color: red;
`;

const MdCard = props => {
  const { children, ...restProps } = props;

  return (
    <StyledMdCard
      {...restProps}
      css={css`
        padding-left: 16px;
        padding-right: 16px;
        margin: 8px;
        background-color: cadetblue;
      `}
      style={{
        paddingLeft: 16,
        paddingRight: 16,
        margin: 8,
        ...restProps?.style,
      }}
    >
      {children}
    </StyledMdCard>
  );
};

export default memo(MdCard);
