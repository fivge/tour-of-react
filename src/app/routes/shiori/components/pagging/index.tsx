import { css } from "@emotion/react";
import { memo } from "react";

const Pagging = props => {
  const { children } = props;

  return (
    <div
      css={css`
        padding: 24px 0;
      `}
    >
      {children}
    </div>
  );
};

export default memo(Pagging);
