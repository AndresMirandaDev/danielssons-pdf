import './App.css'
import Login from './views/login/Login'
import AuthContext from './auth/context'
import { useEffect, useState } from 'react'
import SidebarLayout from './components/layout/SidebarLayout'
import storage from './auth/storage'


function App() {
  const [user, setUser] = useState()
  
  useEffect(()=>{
    setUser(storage.getUser())
  },[])
  return (
    <>
    <AuthContext.Provider value={{user, setUser}}> 
      {user ? <SidebarLayout />: <Login />}
    </AuthContext.Provider>
    </>
  )
}

export default App
