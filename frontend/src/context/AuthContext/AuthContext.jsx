import { createContext, useReducer, useEffect } from "react";
import authReducer from "./authReducer";
import PropTypes from "prop-types";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const initialState = {
        name: "",
        number: "",
        email: "",
        password: "",
    };
    const [state, dispatch] = useReducer(authReducer, initialState);

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
