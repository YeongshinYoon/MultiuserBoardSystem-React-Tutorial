import { createContext, useReducer } from "react"
import { SIGNIN } from "./action"

const initialState = {
    Username: ""
}

const Context = createContext({})

const reducer = (state = initialState, action) => {
    switch (action.type)
    {
        case SIGNIN:
            return {
                ...state,
                Username: "12345"
            }
            default:
                return state
    }
}

const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = {state, dispatch}

    return <Context.Provider value={value}>{children}</Context.Provider>
}

export default { Context }
export { StoreProvider }