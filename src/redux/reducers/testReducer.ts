import { Reducer } from "redux";
import {
  ADD_ITEM,
  TestActionCreatorTypes,
} from "../actionCreators/testActionCreator";

interface TestReducerType {
  test_array: Array<string>;
}

const testReducer: Reducer<TestReducerType, TestActionCreatorTypes> = (
  state = { test_array: [] },
  action: TestActionCreatorTypes
) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, test_array: [...state.test_array, "hello"] };
    default:
      return state;
  }
};

export default testReducer;
