import { memo } from "react";
import "mdui/components/list-item.js";

const MdListItem = props => {
  const { children, ...restProps } = props;

  return <mdui-list-item {...restProps}>{children}</mdui-list-item>;
};

/** 列表项 */
export default memo(MdListItem);
