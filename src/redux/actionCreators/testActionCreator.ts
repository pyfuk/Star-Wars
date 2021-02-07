export const ADD_ITEM = "ADD_ITEM";

interface AddItemAction {
  type: typeof ADD_ITEM;
}

export type TestActionCreatorTypes = AddItemAction;

export const addItem = () => ({
  type: ADD_ITEM,
});
