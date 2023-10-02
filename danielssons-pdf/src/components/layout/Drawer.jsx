import React from 'react';
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import {BiSolidLogOut} from 'react-icons/bi'

import navigationConfig from "../../config/navigation.config";
import useAuth from '../../auth/useAuth';



const Drawer = ({children}) => {
    const [open, setOpen] = useState(false)
    const auth = useAuth()
    const navigate = useNavigate()

    return (
        <div className="flex">
            <input type="checkbox" id="drawer-toggle" className="relative sr-only peer touch-auto" defaultChecked={open} onClick={()=>setOpen(!open)}/>
            <label htmlFor="drawer-toggle" className="cursor-pointer absolute top-0 left-0 inline-block p-4 transition-all opacity-50 duration-500 bg-medium rounded-lg peer-checked:rotate-180 peer-checked:left-64 hover:opacity-100 z-10">
                <div className="w-6 h-1 mb-3 -rotate-45 bg-white rounded-lg"></div>
                <div className="w-6 h-1 rotate-45 bg-white rounded-lg"></div>
            </label>
            <div className="fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform -translate-x-full bg-stockholm bg-cover bg-blend-overlay bg-medium shadow-lg peer-checked:translate-x-0">

                {navigationConfig.map((item)=>{
                    return(
                        <NavLink key={item.key} title={item.title} to={item.path}>
                <div className="px-6 py-4 hover:bg-yellow  p-4 rounded-lg hover:text-primary text-white duration-300 flex items-center my-5">
                    <span className={`text-3xl float-left ${open && 'rotate-[360deg]'} duration-1000`}>
                        {item.icon && item.icon}
                    </span>
                        <span className="font-semibold text-center ml-5">{item.title}</span>
                </div>
                        </NavLink>
                    )
                })}
                <div className="px-6 py-4 hover:bg-yellow  p-4 rounded-lg hover:text-primary text-white duration-300 flex items-center my-20 cursor-pointer" onClick={()=>{
                    auth.logOut()
                    navigate('/')
                    }}>
                    <span className={`text-3xl float-left ${open && 'rotate-[360deg]'} duration-1000`}>
                        <BiSolidLogOut />
                    </span>
                        <span className="font-semibold text-center ml-5">Logga ut</span>
                </div>
            </div>
            <div className={` w-screen duration-300`}>
                {children}
            </div>
          </div> );
}
 
export default Drawer;