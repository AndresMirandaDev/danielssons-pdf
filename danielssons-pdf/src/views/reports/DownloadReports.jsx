import { useEffect, useState } from "react";

import AppFormPicker from "../../components/forms/AppFormPicker";
import useApi from "../../hooks/useApi";
import usersApi from "../../api/users";
import salaryReportsApi from "../../api/salaryReports";
import AppForm from "../../components/forms/AppForm";
import SubmitButton from "../../components/forms/SubmitButton";
import AppFormDatePicker from "../../components/forms/AppFormDatePicker";
import ReportListItem from "../../components/reports/ReportListItem";
import {BsSearch} from 'react-icons/bs'
import DownloadPDF from "../../components/reports/DownloadPDF";

const DownloadReports = () => {
    const {data:reports, request:loadReports} = useApi(salaryReportsApi.getReports)
    const {data: users , request:loadUsers} =  useApi(usersApi.getAllUsers)
    const [reportsInDisplay, setReportsInDisplay] = useState([])

    useEffect(()=>{
        loadReports()
        loadUsers()
    },[])

    const handleFilter = ({user, date}) =>{
        const selectedDate = new Date(date)

        if(user && date){
            setReportsInDisplay(reports.filter((report)=>{
                const reportDate = new Date(report.date)

                return report.worker._id===user && selectedDate.getFullYear() ===  reportDate.getFullYear() && selectedDate.getMonth() === reportDate.getMonth()
            }))
        }else if(!user && date){
            setReportsInDisplay(reports.filter((report)=>{
                const reportDate = new Date(report.date)

                return selectedDate.getFullYear() ===  reportDate.getFullYear() && selectedDate.getMonth() === reportDate.getMonth()
            }))
        }
        else if(user && !date){
            setReportsInDisplay(reports.filter((report)=>{
                const reportDate = new Date(report.date)

                return report.worker._id===user
            }))
        }
       
    }


    return ( 
        <div className="bg-black w-screen">
            <div className="text-white bg-gradient-to-b from-primaryOpacity to-dark rounded-lg md:flex  p-12 justify-center min-h-screen">
                <div className=" md:w-1/2 md:p-10 flex-col md:h-full md:bg-black md:bg-opacity-25 md:rounded-lg">
                    <div className="text-center m-4 text-2xl flex justify-center items-center">
                        <BsSearch className="m-3"/>
                        <span>Sök rapporter för att ladda ner</span>
                        </div>
                   <AppForm initialValues={{
                    user:'',
                    date:''
                   }}
                   onSubmit={handleFilter}
                   >
                    <div className="flex-col basis-full">
                        <AppFormPicker items={users} placeholder='Välj användare' name='user'/>
                        <AppFormDatePicker name='date' type='month'/>
                        <SubmitButton title='Sök' color='primary' type='submit'/>
                    </div>
                   </AppForm>
                </div>
                <div className="md:w-full md:h-full bg-black rounded-xl p-4 m-1 bg-opacity-25">
                    {reportsInDisplay.length===0? <div className="text-3xl font-extralight text-center">Inga rapporter hittades</div> : reportsInDisplay.map((report)=>{
                        return <DownloadPDF key={report._id} report={report}/>
                    })}
                </div>
            </div>
        </div> 
    );
}
 
export default DownloadReports;