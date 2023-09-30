import {BsPersonVcard} from 'react-icons/bs'
import {VscCalendar} from 'react-icons/vsc'
import {BiSolidDownload} from 'react-icons/bi'

import useMonth from '../../hooks/useMonth'
import { useNavigate } from 'react-router-dom'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'
import PDFFile from '../PDFFile'

const DownloadPDF = ({report}) => {
    const navigate = useNavigate()

    const {worker , date} =report

    const reportDate = new Date(date)

    const month = useMonth(reportDate)
    
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
            <span >Ladda ner PDF</span>
            <PDFDownloadLink document={<PDFFile report={report}/>}>
                {({loading})=>{return ( loading ?  'loading...' : <BiSolidDownload className='text-yellow m-4  cursor-pointer hover:scale-110 duration-500'/>)}}
            </PDFDownloadLink>

        </div>
    </div> );
}
 
export default DownloadPDF;