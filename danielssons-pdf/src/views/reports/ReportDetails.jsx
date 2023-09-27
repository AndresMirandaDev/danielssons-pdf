import { useLocation } from "react-router-dom";
import useMonth from "../../hooks/useMonth";
import EditHourComponent from "../../components/reports/EditHourComponent";
import salaryReportsApi from "../../api/salaryReports";
import useApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner";

const ReportDetails = () => {
    const location = useLocation()
    const [report, setReport] = useState(location.state)
    const {data:reports, request:loadReports} = useApi(salaryReportsApi.getReports)

    const [updating, setUpdating] = useState(false)

    const month = useMonth(report.date)
    
    async function updateReport () {
        setUpdating(true)
        const updatedReport = await salaryReportsApi.getReportById(report)

        setReport(updatedReport.data)
        setUpdating(false)
    }
    

    const handleReportUpdate = async (updatedWorkDay, id) =>{

         const filteredWorkdays = report.workDays.filter((workday)=>{
            return workday._id !== id
        })

        const newWorkDays = [...filteredWorkdays, updatedWorkDay]

        newWorkDays.forEach((wd)=>{
            wd.places.forEach((place)=>{
                place.project = place.project._id
            })
        })

        

        const updatedReport = {
            _id:report._id,
            worker:report.worker,
            date:report.date,
            workDays:[...newWorkDays]
        }
        

       const result = await salaryReportsApi.updateReport(updatedReport)
       
       updateReport()


    }

  

    return ( 
        <div className=" bg-black w-screen">
            <div className="text-white bg-gradient-to-b from-primaryOpacity to-dark rounded-lg md:flex  p-12 justify-center min-h-screen">
                {updating? <Spinner /> : <div className="w-full border border-light border-opacity-20 rounded-xl bg-black bg-opacity-25 grid grid-cols-2 overflow-scroll md:overflow-hidden">
                    <div className="flex justify-around items-center ">
                        <div className="bg-logo w-20 h-20 md:w-40 md:h-40 bg-contain bg-no-repeat"></div>
                        <div className="text-xl md:text-3xl text-center">
                            <span>Lön Rappport</span>
                        </div>
                    </div>
                    <div className="p-4 text-2xl font-extralight">
                        <div className="my-4 border-b border-yellow">
                            <span>Namn: {report.worker.name}</span>
                        </div>
                        <div className="my-4 border-b border-yellow">
                            <span>Månad: {month} {new Date(report.date).getFullYear()}</span>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <table className="w-full">
                            <thead className="">
                                <tr className="bg-primary">
                                    <th>
                                        Datum
                                    </th>
                                    <th>
                                        Veckodag
                                    </th>
                                    <th>
                                        Arbetsplatser
                                    </th>
                                    <th>
                                        Timmar (per arbetsplats)
                                    </th>
                                    <th>
                                        Summa timmar(arbetsdag)
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {report.workDays.map((workDay, index)=>{
                                    const workDayDate = new Date(workDay.date)
                                    const weekDays= {
                                        0: 'Söndag',
                                        1: 'Måndag',
                                        2: 'Tisdag',
                                        3: 'Onsdag',
                                        4: 'Torsdag',
                                        5: 'Fredag',
                                        6: 'Lördag',
                                      }
                                    return (
                                        
                                         <tr className="bg-primaryOpacity border-primary border" key={workDay._id}>
                                            <td>
                                            {workDayDate.toLocaleDateString()}
                                            </td>
                                            <td>
                                                {weekDays[workDayDate.getDay()]}
                                            </td>
                                            {workDay.places.map((place)=>{
                                                return(
                                                <div className="justify-center items-center flex h-28 " key={place.project._id}>
                                                    <td>
                                                    {place.project.name}
                                                    </td>
                                                </div >     
                                                )
                                            })}
                                            <td>
                                                <EditHourComponent workDay={workDay} updateReport={handleReportUpdate}/>
                                            </td>
                                           <td>
                                            {
                                                workDay.places.reduce((dayAccumulator, place) => {
                                                    return dayAccumulator + place.hours;
                                                  }, 0)
                                            }
                                           </td>
                                        </tr>
                                         )
                                })}
                            </tbody>
                            <tfoot className="md:flex text-3xl font-extralight m-4 justify-center">
                                <tr>
                                    <td>
                                        Summa timmar {' '}
                                        {report.workDays.reduce((accumulator, workDay) => {
                                            const dayTotalHours = workDay.places.reduce((dayAccumulator, place) => {
                                                return dayAccumulator + place.hours;
                                            }, 0);

                                            return accumulator + dayTotalHours;
                                        }, 0)}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>}
            </div>
        </div> 
    );
}
 
export default ReportDetails;