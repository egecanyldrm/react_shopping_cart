import { createStore } from "redux"
import { reducer } from "./Reducers"

export default () => {
    const store = createStore(reducer);
    return store
}