import { useState } from "react"

export function LogIn(){
    const [user, setUser] = useState({
        name:'',
        email:'',
        password:'',
    })

    function handleSubmit(){

    }

    return(
        <form onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold">Sign In</h1>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            
            <a href="#">Forget Your Password?</a>
            <button>Sign In</button>
        </form>
    )
}