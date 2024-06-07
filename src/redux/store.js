import { applyMiddleware, createStore } from "redux";
import { inventoryManagementReducer } from "./reducer";
import thunk from "redux-thunk";

export const store = createStore(inventoryManagementReducer, applyMiddleware(thunk));
