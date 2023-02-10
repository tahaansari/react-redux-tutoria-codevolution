import { connect } from "react-redux";
import { buyIcecream } from "../redux";

const IcecreamContainer = (props) => {
  return (
    <>
      <h2>Number of Icecream {props.numOfIcecream}</h2>
      <button onClick={props.buyIcecream}>Buy Icecream</button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIcecream: state.icecream.numOfIcecream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: () => dispatch(buyIcecream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamContainer);
