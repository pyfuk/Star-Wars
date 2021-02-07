import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addItem } from "../../redux/actionCreators/testActionCreator";
import { ReduxState } from "../../redux/store";
import Test from "./Test";

const mapStateToProps = (state: ReduxState) => ({
  test_array: state.test.test_array,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onAddItem: () => {
    dispatch(addItem());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Test);
