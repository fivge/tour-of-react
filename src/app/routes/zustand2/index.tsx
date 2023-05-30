import { redirect, useNavigate } from "react-router-dom";
import { useBearStore } from "../../shared/store";

const Controls = () => {
  const increasePopulation = useBearStore(state => state.increasePopulation);
  const navigate = useNavigate();

  return (
    <>
      <div onClick={increasePopulation}>one up</div>

      <div onClick={() => navigate(`/zustand`)}>go to bears</div>
    </>
  );
};

export default Controls;
