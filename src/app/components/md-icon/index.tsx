import { memo } from "react";
import "mdui/components/icon.js";

const MdIcon = props => {
  const { children, ...restProps } = props;

  return <mdui-icon {...restProps}>{children}</mdui-icon>;
};

export default memo(MdIcon);
