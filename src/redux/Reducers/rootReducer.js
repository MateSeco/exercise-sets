import { combineReducers } from "redux";
import comments from "./commentReducer";
/* import upvotes from "./upvotesReducer"; */

const rootReducer = combineReducers({ comments/* , upvotes  */ });

export default rootReducer;
