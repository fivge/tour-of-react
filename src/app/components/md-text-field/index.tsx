import { memo, useEffect, useRef } from "react";
import "mdui/components/text-field.js";

const MdTextField = props => {
  const { children, onChange, ...restProps } = props;
  const ref = useRef(null);

  useEffect(() => {
    const onInnerChange = event => {
      onChange?.(event.target.value);
    };

    ref.current.addEventListener("change", onInnerChange);

    return () => {
      ref.current.removeEventListener("change", onInnerChange);
    };
  }, []);

  return (
    <mdui-text-field {...restProps} ref={ref}>
      {children}
    </mdui-text-field>
  );
};

export default memo(MdTextField);
