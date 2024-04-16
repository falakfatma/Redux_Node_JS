const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

function count_Increase() {
  return {
    type: INCREASE,
    info: "increasing",
  };
}
function count_Decrease() {
  return {
    type: DECREASE,
    info: "decreasing",
  };
}

const initialState = { count: 0 };
// const initialIncreaseState = { countIn: 0 };
// const initialDecreaseState = { countDe: 20 };
const increaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};
const decreaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DECREASE":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};
// const reducers = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREASE":
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case "DECREASE":
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//   }
// };
const rootReducers = combineReducers({
  increase: increaseReducer,
  decrease: decreaseReducer,
});
const store = createStore(rootReducers);
// const store = createStore(reducers);
// console.log("Initial State", store.getState());

const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});
// console.log('Update State',store.dispatch(action()))
store.dispatch(count_Increase());
store.dispatch(count_Increase());
store.dispatch(count_Increase());
store.dispatch(count_Decrease());
store.dispatch(count_Decrease());

unsubscribe();
