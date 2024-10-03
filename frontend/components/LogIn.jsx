import { useState } from "react";
import { loginUser } from "../src/api";
import { useNavigate } from "react-router-dom";

export function LogIn() {
    const navigate = useNavigate();
    const [loginErr, setLoginErr] = useState(false);
    const [errMsg, setErrMsg] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    let response = await loginUser(user);
    if(response.data.success){
        console.log(response.data.user)
        navigate("/home")
    }else{
        setLoginErr(true);
        setErrMsg(response.data.message)
        // console.log(response.data.message)
    }
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }


  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-3xl font-bold">Sign In</h1>
      {loginErr? <span className="text-red-500 flex justify-start">{errMsg}</span> : <></>}
      <input
        className={`${
        loginErr
            ? "border-red-500 outline-red-500 border-2 border-solid"
            : "border-none outline-none"
        }`}
        type="email"
        placeholder="Email"
        required
        onChange={(e) => {
        //   setPassError(false);
          handleChange(e);
        }}
        name="email"
      />
      <input
        className={`${
        loginErr
            ? "border-red-500 outline-red-500 border-2 border-solid"
            : "border-none outline-none"
        }`}
        type="password"
        placeholder="Password"
        required
        onChange={handleChange}
        name="password"
      />

      {/* <a href="#">Forget Your Password?</a> */}
      <button>Sign In</button>
    </form>
  );
}
