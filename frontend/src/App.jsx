import { useState, useEffect } from 'react'
import './App.css'
import { getUsers, getUser, createUser, updateUser, deleteUser } from './api';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import { Landing } from '../pages/Landing'
import { Feeds } from '../pages/Feeds';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Layout } from '../components/layout';
import { Authentication } from '../pages/Authentication';

function App() {
  const [users, setUsers] = useState();
  
  // useEffect(()=> {
  //   async function loadAllUsers() {
  //     let data = await getUsers();
  //     if(data){
  //       setUsers(data);
  //     }
  //   }

  //   loadAllUsers()
  // }, [])

  return (
    <Router>
     {/* {JSON.stringify(users)} */}
     <Routes>
      <Route path='/' element={<Authentication/>}/>
      <Route element={<Layout/>}>
        <Route path="/home" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/feeds" element={<Feeds/>}/>
      </Route>
     </Routes>
    </Router>
  )
}

export default App;
