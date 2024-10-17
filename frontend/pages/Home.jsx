import {jwtDecode} from "jwt-decode";
import { useEffect, useState } from "react";

export function Home() {
    // const [user, setUser] = useState(null);

    // useEffect(() => {
    //     function loadUserData(){
    //         const token = sessionStorage.getItem("User")
    //         setUser(jwtDecode(token))
    //     }   
    //     loadUserData();
    // }, [])

    return(
        <>

               <div className="font-proxima">
                    Hi
                </div>

            {/* {user && (
               <div className="font-proxima">
                    Hi {user.name}
                </div>
            )}       */}
        </>
        )
}