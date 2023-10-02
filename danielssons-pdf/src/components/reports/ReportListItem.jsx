import {BsPersonVcard} from 'react-icons/bs'
import {VscCalendar} from 'react-icons/vsc'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {FaTrashAlt} from 'react-icons/fa'

import useMonth from '../../hooks/useMonth'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Modal from '../Modal'
import salaryReportsApi from '../../api/salaryReports'
import Dialog from '../Dialog'
import Spinner from '../Spinner'

const ReportListItem = ({report, refresh}) => {
    const navigate = useNavigate()

    const [dialogVisible, setDialogVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [loading, setLoading] =useState(false)

    const {worker , date} =report

    const reportDate = new Date(date)

    const month = useMonth(reportDate)

    const handleDelete = async () =>{
        setLoading(true)
        const result = await salaryReportsApi.deleteReport(report)

        if(result.ok){
            setLoading(false)
            setModalVisible(false)
            setDialogVisible(true)

            setTimeout(()=>{
                setDialogVisible(false)
            },2000)
            setTimeout(()=>{
                refresh()
            },2500)
        }
    }
    
    return ( 
    <div className="bg-gradient-to-r from-primaryOpacity to-green p-4 rounded-xl my-3 bg-blend-overlay md:flex md:justify-between">
        <div className='md:flex items-center text-3xl font-extralight'>
            <div className='flex items-center'>
                <BsPersonVcard className='m-3'/>
                <span>
                    {worker.name}
                </span>
            </div>
            <div className='flex items-center'>
                <VscCalendar className='m-3'/>
                <span>
                    {month} {reportDate.getFullYear()}
                </span>
            </div>
        </div>
        <div className='text-center font-extralight flex justify-center items-center text-xl md:text-2xl'>
            <span >Granska Rapport</span>
            <BsFillArrowRightCircleFill className='text-yellow m-4 cursor-pointer hover:scale-110 duration-500' onClick={()=>navigate('/reportdetails', {state:report})}/>
            <div className='bg-danger p-2 rounded-full cursor-pointer hover:scale-110 duration-500' onClick={()=>{setModalVisible(true)}}>
                <FaTrashAlt className='text-light ' />
            </div>
        </div>
        <Modal open={modalVisible} onClose={()=>{setModalVisible(false)}}>
            <FaTrashAlt className='text-danger text-4xl mx-auto'/>
            <div className='mx-auto my-4 w-full'>
                <h3 className='text-3xl text-primaryOpacity text-center my-4 '>Bekräfta radering</h3>
                <span className='text-dark font-extralight text-xl text-center'>Är du säker du vill radera följande rapport?</span>
                <span className='text-dark text-xl font-extralight block text-center my-4'>{worker.name} {month} {reportDate.getFullYear()}</span>
            </div>
            {loading ? <div className='flex justify-center'><Spinner /></div> : (<div className='flex gap-4'>
                <button className='btn bg-danger rounded-lg p-2 w-full' onClick={handleDelete}>
                    Delete
                </button>
                <button className='btn bg-light w-full text-dark rounded-lg p-2' onClick={()=>{setModalVisible(false)}}>
                    Cancel
                </button>
            </div>)}
        </Modal>
       <Dialog open={dialogVisible} onClose={()=>{setDialogVisible(false)}}>
            <div className='flex justify-center'>
                <span className='text-center'>Följande rapport raderades : {worker.name} {month} {reportDate.getFullYear()}</span>
            </div>
       </Dialog>
    </div> );
}
 
export default ReportListItem;