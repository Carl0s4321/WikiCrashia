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
        <div className="w-full h-full bg-red-500 flex flex-col items-center">
            <div className="w-[100px] h-[100px] rounded-full bg-gray-500 flex items-center justify-center">
                a
            </div>
            <p>name: {user.name}</p>
            <p>email: {user.email}</p>
        </div>
    )
}