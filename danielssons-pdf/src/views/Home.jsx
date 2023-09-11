import { useEffect } from "react";
import {BiSolidCity} from 'react-icons/bi'
import {BsTools} from 'react-icons/bs'
import {AiTwotoneTool} from 'react-icons/ai'
import {TbCalendarStats} from 'react-icons/tb'
import {AiOutlineFileDone} from 'react-icons/ai'


import useApi from "../hooks/useApi";
import projectsApi from "../api/projects";
import toolsApi from "../api/tools";
import rentedApi from "../api/rented";
import salaryReportsApi from "../api/salaryReports";
import useMonth from "../hooks/useMonth";
import useWeek from "../hooks/useWeek";
import HomeInfo from "../components/home/HomeInfo";


const user={
    name:'Andres Miranda',
    email:'andres@aklass.cl',
    phone:'08045122683'
}
const Home = () => {
    const currentDate=new Date()
    const month=useMonth(currentDate)
    const week = useWeek(currentDate)
    
    const {data:projects, request:loadProjects}=useApi(projectsApi.getProjects)
    const {data:tools, request: loadTools} = useApi(toolsApi.getTools)
    const {data:rentedTools, request:loadRented} = useApi(rentedApi.getRentedTools)
    const {data:salaryReports, request:loadReports} = useApi(salaryReportsApi.getReports)

    const toolsInReparation =  tools.filter((tool)=>{
        return tool.reparation
    })

    const sentReports = salaryReports.filter((report)=>{
        return new Date(report.date).getFullYear() === currentDate.getFullYear() && new Date(report.date).getMonth() === currentDate.getMonth()
    })

    console.log(sentReports)


    useEffect(()=>{
        loadProjects();
        loadTools();
        loadRented;
        loadReports();
    },[])
    return (
        <div className="bg-gradient-to-br from-black to-black w-screen">
            <div className="md:grid grid-cols-2 grid-rows-2 md:gap-3">
                <div className="flex justify-center items-center text-white bg-gradient-to-b from-primaryOpacity to-dark rounded-lg">
                    <div className="flex-col">
                    <div className="text-4xl font-light text-center animate-pulse">Välkommen {user.name}</div>
                    <div className="text-4xl font-extralight text-center m-4">{currentDate.getDate()} {month} vecka {week}</div>
                    </div>
                </div>
                <div className=" grid row-span-2 p-4 bg-gradient-to-b from-primaryOpacity to-black rounded-xl">
                    <div className="flex justify-center items-center">
                    <div className="p-4 bg-primary text-white rounded-full hover:bg-yellow duration-500 hover:text-primary">
                        <BiSolidCity className=" text-3xl animate-pulse"/>
                    </div>    
                    <span className="text-white font-light text-center m-6 text-3xl p-4">Projekt</span>
                    </div>
                    {projects.map((project)=>{
                        const labelClass = "font-extralight text-yellow"
                        const itemContainerClass = "m-6 p-2 text-center text-lg font-extralight"
                        return (
                            <div className="m-2 text-white  rounded-lg grid md:grid-cols-2 md:grid-rows-2 overflow-hidden bg-blend-overlay bg-dark bg-opacity-30 hover:scale-[1.03] duration-500">
                                <div className={`md:row-span-3 flex justify-center items-center text-3xl font-extralight shadow-xl bg-project bg-cover bg-blend-overlay bg-primary`}>{project.name}</div>
                                <div className={itemContainerClass}><div className={labelClass}> Projekt nummer</div>{project.projectNumber}</div>
                                <div className={itemContainerClass}><div className={labelClass}>Address</div>{project.address}</div>
                                <div className={itemContainerClass}><div className={labelClass}>ArbetsLedare</div>{project.supervisor.name}</div>
                            </div>
                        )
                    })}
                </div>
                <div className="bg-gradient-to-b from-primaryOpacity to-black rounded-xl p-4 md:grid grid-cols-2 grid-rows-2">
                  <HomeInfo data={tools.length} label='Registrerade verktyg' icon={<BsTools />}/>
                  <HomeInfo data={toolsInReparation.length} label="Verktyg på reparation" icon={<AiTwotoneTool />}/>
                  <HomeInfo data={rentedTools.length} label='Inhyrda verktyg' icon={<TbCalendarStats />}/>
                  <HomeInfo data={sentReports.length} label={`Inskickade rapporter i ${month}`} icon={<AiOutlineFileDone />}/>
                </div>
            </div>
        </div>
        );
}
 
export default Home;