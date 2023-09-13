import {AiOutlineFileDone} from 'react-icons/ai'
import {FaDownload} from 'react-icons/fa'

const Reports = () => {
    return ( 
        <div className="bg-black w-screen h-screen">
            <div className="md:flex md:w-screen md:p-10 gap-5 h-screen">
                <div className="w-screen bg-gradient-to-br from-black to-primary rounded-lg flex justify-center relative">
                    <div className="text-white text-center m-4 text-3xl font-extralight">
                        Granska lön rapporter
                    </div>
                    <span className='text-white h-full w-full md:text-[20rem] absolute md:flex justify-center items-center opacity-50'>
                        <AiOutlineFileDone className='hover:bg-yellow rounded-full p-4 hover:text-primary duration-500 cursor-pointer' onClick={()=>{window.location.href='/reports/review'}}/>
                    </span>
                </div>
                <div className="bg-yellow w-screen bg-gradient-to-br from-black to-primary rounded-lg flex justify-center relative">
                    <div className="text-white text-center m-4 text-3xl font-extralight">Ladda ner lön rapporter</div>
                    <span className='text-white h-full w-full md:text-[20rem] absolute md:flex justify-center items-center opacity-50'>
                        <FaDownload className='hover:bg-yellow rounded-full p-4 hover:text-primary duration-500 cursor-pointer'/>
                    </span>
                </div>
            </div>
        </div>
     );
}
 
export default Reports;