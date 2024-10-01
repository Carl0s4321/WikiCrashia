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
        <form onSubmit={handleSubmit}>
            <input placeholder={"Name"}/>
            <input placeholder={"Email"}/>
            <input placeholder={"Password"}/>
        </form>
    )
}