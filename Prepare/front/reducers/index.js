import { HYDRATE } from "next-redux-wrapper"
import { combineReducers } from "redux";

import post from "./post.js";
import user from "./user.js";

// const initialState = {
//   // name: "jay",
//   // age: 30,
//   // password: "babo",
//   user: {

//   },
//   post: {

//   }
// }


// (이전 상태, 액션) => 다음 상태
// const rootReducer = (state = initialState, action) => {
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload }

      default:
        return state;
    }
  },
  user,
  post,
})


export default rootReducer;