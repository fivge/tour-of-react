import { memo } from "react";
import "mdui/components/divider.js";

const MdDivider = props => {
  const { children, ...restProps } = props;

  return <mdui-divider {...restProps}>{children}</mdui-divider>;
};

export default memo(MdDivider);
