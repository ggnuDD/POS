import {useState, createContext} from "react"

export const AuthController = createContext();

const AuthProvider = ({children}) => {

    const [isLogin, setIsLogin] = useState(false);

    const authData = {
        isLogin,
        setIsLogin
    }

    return (
        <AuthController.Provider value={authData}>
            {children}
        </AuthController.Provider>
    )
}

export default AuthProvider;