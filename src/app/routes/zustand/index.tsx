import { redirect, useNavigate } from "react-router-dom";
import { useBearStore } from "../../shared/store";

const BearCounter = () => {
  const bears = useBearStore(state => state.bears);
  const navigate = useNavigate();

  const onClick = () => {
    return redirect(`/zustand2`);
  };

  return (
    <>
      <div>{bears} around here ...</div>

      <div onClick={() => navigate(`/zustand2`)}>go set bears</div>
      <div onClick={() => onClick()}>go2 set bears</div>
    </>
  );
};

export default BearCounter;
