import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

const DynamicCakeContainer = () => {
  const [number, setNumber] = useState(1);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Number of Cake {numOfCakes}</h2>
      <input type="text" value={number} onChange={(event) => setNumber(event.target.value)} />
      <button onClick={() => dispatch(buyCake(number))}>Buy {number} Cake</button>
    </>
  );
};

export default DynamicCakeContainer;
