import { useState, useEffect } from 'react'
import './App.css'
import { getUsers, getUser, createUser, updateUser, deleteUser } from './api';

function App() {
  const [users, setUsers] = useState();
  
  useEffect(()=> {
    async function loadAllUsers() {
      let data = await getUsers();
      if(data){
        setUsers(data);
      }
    }

    loadAllUsers()
  }, [])

  return (
    <>
     {JSON.stringify(users)}
    </>
  )
}

export default App
