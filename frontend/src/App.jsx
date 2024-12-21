import { useEffect } from "react";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Landing } from "../pages/Landing";
import { Feeds } from "../pages/Feeds";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Layout } from "../components/Layout";
import { Authentication } from "../pages/Authentication";
import { socketStore } from "./store/socketStore";
import axios from "axios";
import { Statistics } from "../pages/Statistics";

function App() {
  const { initializeSocket, disconnectSocket } = socketStore();
  useEffect(() => {
    initializeSocket();

    return () => disconnectSocket();
  }, []);

  // useEffect(()=> {
  //   async function loadAllUsers() {
  //     let data = await getUsers();
  //     if(data){
  //       setUsers(data);
  //     }
  //   }

  //   loadAllUsers()
  // }, [])

  useEffect(() => {
    let token = sessionStorage.getItem("User");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="auth" element={<Authentication />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/feeds" element={<Feeds />} />
          <Route path="/statistics" element={<Statistics />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
