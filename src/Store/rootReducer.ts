import { combineReducers } from "@reduxjs/toolkit";

import cartReducer from "./Slices/cart";
import productReducer from "./Slices/product";

// HERE WE PASS OUR REDUCERS.
const rootReducer = combineReducers({ cartReducer, productReducer });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
