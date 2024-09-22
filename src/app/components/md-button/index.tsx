import { memo } from "react";
import "mdui/components/button.js";

const MdButton = props => {
  const { children, ...restProps } = props;

  return <mdui-button {...restProps}>{children}</mdui-button>;
};

export default memo(MdButton);
