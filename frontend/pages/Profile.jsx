import { updateUser } from "../src/api";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPencil } from "@fortawesome/free-solid-svg-icons";

export function Profile() {
  const [user, setUser] = useState({name: "", email: "" });
  const [editable, setEditable] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const user_SS = sessionStorage.getItem("User");
    if (!user_SS) {
      navigate("/");
    } else {
      setUser(jwtDecode(user_SS));
    }
  }, []);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
//   console.log(user)

  async function handleSubmit(e){
    e.preventDefault()
    const response = await updateUser(user._id, user)
    // console.log(response)
    if(response.data.success){
        sessionStorage.setItem("User", response.data.token)
        setUser(jwtDecode(response.data.token))
    }
    setEditable(!editable)
  }

  return (
    <div className="p-10 bg-red-500 flex flex-col md:flex-row justify-center items-center md:items-start gap-x-20">
      <div className="flex flex-col gap-y-3 items-center mb-4 md:mb-0">
        <div className="w-[150px] h-[150px] rounded-full bg-gray-500 flex items-center justify-center">
          <FontAwesomeIcon icon={faUser} className="text-6xl text-gray-700" />
        </div>
        <div
          onClick={() => {
            setEditable(!editable);
          }}
          className="flex flex-row items-center gap-x-2 cursor-pointer"
        >
          <FontAwesomeIcon icon={faPencil} />
          <span>Edit</span>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <h1 className="font-bold text-3xl">My Profile</h1>
        <form onSubmit={handleSubmit} className="flex flex-col mt-5 gap-4">
          <div className="flex flex-col">
            <span>NAME</span>
            <input
              className={`mt-1 p-2 border rounded-md focus:outline-none ${
                editable
                  ? "border-gray-300 bg-white"
                  : "border-gray-300 bg-gray-100"
              }`}
              disabled={!editable}
              value={user.name}
              name="name"
              onChange={(e)=>{
                handleChange(e);
              }}
              required
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <span>EMAIL</span>
            <input
              className={`mt-1 p-2 border rounded-md focus:outline-none ${
                editable
                  ? "border-gray bg-white"
                  : "border-gray bg-gray-100"
              }`}
              disabled={!editable}
              value={user.email}
              name="email"
              onChange={(e)=>{
                handleChange(e);
              }}
              required
              type="email"
            />
          </div>
          {editable && (
              <button className="m-2 rounded-xl bg-green-400">SAVE</button>
            )}
        </form>
            <button>Reset Password</button>
      </div>
    </div>
  );
}
