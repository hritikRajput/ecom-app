import { createContext, useEffect, useReducer } from "react";
import authReducer from "./authReducer";
import PropTypes from "prop-types";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const initialState = {
        name: "",
        number: "",
        email: "",
        password: "",
        token: "",
    };


    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            dispatch({
                type: "UPDATE_FIELD",
                payload: user
            })
        }
    }, [])

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export { AuthContext, AuthProvider };
