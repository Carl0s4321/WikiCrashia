import { getUser } from "../src/api"
import { jwtDecode } from "jwt-decode"
import { useEffect,useState } from "react"
import { useNavigate } from "react-router-dom";

export function Profile() {
    const [user, setUser] = useState({});
    const navigate = useNavigate()
    useEffect(()=> {       
        const user = sessionStorage.getItem("User")
        if(!user){
            navigate("/")
        }else{
            setUser(jwtDecode(user))
        }
    }, [])

    return(
        <div>
            <p>name: {user.name}</p>
            <p>email: {user.email}</p>
        </div>
    )
}