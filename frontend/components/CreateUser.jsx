import { useState } from "react"

export function CreateUser(){
    const [user, setUser] = useState({
        name:'',
        email:'',
        password:'',
    })

    function handleSubmit(){

    }

    return(
        <form onSubmit={handleSubmit} className="">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <input type="text" placeholder="Name"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            
            <button>Create Your Account</button>
        </form>
    )
}