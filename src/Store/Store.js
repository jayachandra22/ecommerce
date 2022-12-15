import { combineReducers, createStore } from "redux";

import { Reducers } from "../Reducer/Reducers";

const AllReducers = combineReducers({
    allproduct:Reducers,
})


export const store =createStore(AllReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )


