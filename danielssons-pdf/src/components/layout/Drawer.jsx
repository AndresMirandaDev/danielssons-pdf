import React from 'react';
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from 'react-icons/fa';

import navigationConfig from "../../config/navigation.config";



const Drawer = ({children}) => {
    const [open, setOpen] = useState(false)

    return (
        <div className="flex">
            <input type="checkbox" id="drawer-toggle" className="relative sr-only peer" defaultChecked={open} onClick={()=>setOpen(!open)}/>
            <label htmlFor="drawer-toggle" className="cursor-pointer absolute top-0 left-0 inline-block p-4 transition-all duration-500 bg-medium rounded-lg peer-checked:rotate-180 peer-checked:left-64">
                <div className="w-6 h-1 mb-3 -rotate-45 bg-white rounded-lg"></div>
                <div className="w-6 h-1 rotate-45 bg-white rounded-lg"></div>
            </label>
            <div className="fixed top-0 left-0 z-20 w-64 h-full transition-all duration-500 transform -translate-x-full bg-primary shadow-lg peer-checked:translate-x-0">

                {navigationConfig.map((item)=>{
                    return(
                        <NavLink key={item.key} title={item.title} to={item.path}>
                <div className="px-6 py-4 hover:bg-yellow  p-4 rounded-lg hover:text-primary text-white duration-300 flex items-center my-5">
                    <span className={`text-2xl float-left ${open && 'rotate-[360deg]'} duration-1000`}>
                        {item.icon && item.icon}
                    </span>
                        <span className="font-semibold text-center ml-5">{item.title}</span>
                </div>
                        </NavLink>
                    )
                })}
            </div>
            <div className={`bg-red-100 w-screen ml-16 duration-300`}>
                {children}
            </div>
          </div> );
}
 
export default Drawer;