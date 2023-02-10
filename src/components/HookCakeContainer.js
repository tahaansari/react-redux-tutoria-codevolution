import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";
import { buyIcecream } from "../redux";

const HookCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Hook Number of Cake {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </>
  );
};

export default HookCakeContainer;
