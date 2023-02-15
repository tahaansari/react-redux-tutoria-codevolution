import { connect } from "react-redux";

const PropsContainer = (props) => {
  return (
    <div>
      <h2>No of item {props.item} </h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake ? state.cake.numOfCakes : state.icecream.numOfIcecream;
  return {
    item: itemState,
  };
};

export default connect(mapStateToProps)(PropsContainer);
