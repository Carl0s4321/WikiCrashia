import { Outlet } from "react-router-dom"
import  { Navbar } from "./Navbar"
import { useNavigate, useLocation} from "react-router-dom"
import { useEffect } from "react"

export function Layout() {
    let user = sessionStorage.getItem("User")
    const navigate = useNavigate()
    const location = useLocation()

    const isMapPage = location.pathname === "/home"

    useEffect(()=>{
        if(!user){
            navigate("/")
        }
    }, [user])

    return(
        <div className="relative">
            <Navbar/>
            <div className={isMapPage? "" : "mt-40 mx-10 md:mx-20"}>
                <Outlet/>
            </div>
        </div>
    )
}