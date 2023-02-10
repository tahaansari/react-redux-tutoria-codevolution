import { useSelector, useDispatch } from "react-redux";
import { buyIcecream } from "../redux";

function HookIcecreamContainer() {
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Hook Number of Icecream {numOfIcecream}</h2>
      <button onClick={() => dispatch(buyIcecream())}>Buy Icecream</button>
    </>
  );
}

export default HookIcecreamContainer;
