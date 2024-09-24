import { memo, useEffect, useRef } from "react";
import "mdui/components/checkbox.js";

const MdCheckbox = props => {
  const { children, onChange, ...restProps } = props;
  const ref = useRef(null);

  useEffect(() => {
    const onInnerChange = event => {
      onChange?.(event.target.checked);
    };

    ref.current.addEventListener("change", onInnerChange);

    return () => {
      ref && ref.current && ref.current.removeEventListener("change", onInnerChange);
    };
  }, []);

  return (
    <mdui-checkbox {...restProps} ref={ref}>
      {children}
    </mdui-checkbox>
  );
};

export default memo(MdCheckbox);
