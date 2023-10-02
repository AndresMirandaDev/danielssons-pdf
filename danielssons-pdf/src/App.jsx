import './App.css'
import Login from './views/login/Login'
import AuthContext from './auth/context'
import { useState } from 'react'
import Home from './views/Home'
import Drawer from './components/layout/Drawer'
import SidebarLayout from './components/layout/SidebarLayout'
import PDFFile from './components/PDFFile'
import { PDFViewer } from '@react-pdf/renderer';


function App() {
  const [user, setUser] = useState()
  console.log(user)
  return (
    <>
    <AuthContext.Provider value={{user, setUser}}> 
      {user ? <SidebarLayout />: <Login />}
    </AuthContext.Provider>
    </>
  )
}

export default App
