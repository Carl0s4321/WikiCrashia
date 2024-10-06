import { useState } from "react";
import { createUser } from "../src/api";
import { useNavigate } from "react-router-dom";

export function CreateUser() {
  const navigate = useNavigate();
  const [passError, setPassError] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    let response = await createUser(user);
    // console.log(response)
    if (response.status !== 200) {
      alert("Account can't be created");
    } else if (response.data.message === "Email is taken") {
        setPassError(true);
    } else {
      navigate("/home");
    }
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-3xl font-bold">Sign Up</h1>
      <input
        type="text"
        placeholder="Name"
        required
        maxLength={30}
        onChange={handleChange}
        name="name"
      />
      {passError? <span className="text-red-500 flex justify-start">Email is taken!</span> : <></>}
      <input
        className={`${
          passError
            ? "border-red-500 outline-red-500 border-2 border-solid"
            : "border-none outline-none"
        }`}
        type="email"
        placeholder="Email"
        required
        maxLength={40}
        onChange={(e)=> {
            setPassError(false);
            handleChange(e);

        }}
        name="email"
      />
      <input
        type="password"
        placeholder="Password"
        required
        maxLength={20}
        minLength={8}
        onChange={handleChange}
        name="password"
      />

      <button type="submit">Create Your Account</button>
    </form>
  );
}
