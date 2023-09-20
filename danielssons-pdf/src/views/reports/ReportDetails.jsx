import { useLocation } from "react-router-dom";
import useMonth from "../../hooks/useMonth";
import AppForm from "../../components/forms/AppForm";
import AppFormField from "../../components/forms/AppFormField";
import SubmitButton from "../../components/forms/SubmitButton";
import EditHourComponent from "../../components/reports/EditHourComponent";

const ReportDetails = () => {
    const location = useLocation()
   
    const report = location.state

    const month = useMonth(report.date)

    return ( 
        <div className=" bg-black w-screen">
            <div className="text-white bg-gradient-to-b from-primaryOpacity to-dark rounded-lg md:flex  p-12 justify-center min-h-screen">
                <div className="w-full border border-light border-opacity-20 rounded-xl bg-black bg-opacity-25 grid grid-col-1 grid-rows-3 overflow-hidden">
                    <div className=" flex justify-around items-center">
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
                    <div className="">
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
                                        Timmar
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {report.workDays.map((workDay)=>{
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
                                        
                                         <tr className="bg-primaryOpacity border-primary border">
                                            <td>
                                            {workDayDate.toLocaleDateString()}
                                            </td>
                                            <td>
                                                {weekDays[workDayDate.getDay()]}
                                            </td>
                                            {workDay.places.map((place)=>{
                                                return(
                                                <div className="justify-center items-center flex">
                                                    <td>
                                                    {place.project.name}
                                                    </td>
                                                </div >     
                                                )
                                            })}
                                            <td>
                                                <EditHourComponent workDay={workDay}/>
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
                </div>
            </div>
        </div> 
    );
}
 
export default ReportDetails;