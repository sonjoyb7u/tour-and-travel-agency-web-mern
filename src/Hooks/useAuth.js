import { useContext } from "react"
import { AuthContext } from "../Contexts/AuthDataProvider"

const useAuth = () => {
    return useContext(AuthContext)
}


export default useAuth