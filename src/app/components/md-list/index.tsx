import { memo } from "react";
import "mdui/components/list.js";

const MdList = props => {
  const { children, ...restProps } = props;

  return <mdui-list {...restProps}>{children}</mdui-list>;
};

export default memo(MdList);
