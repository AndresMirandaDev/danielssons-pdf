import {AiOutlineClose} from 'react-icons/ai'

const Dialog = ({open, onClose, children}) => {

    return ( 
    <div className={`fixed inset-0 transition-colors ${open ? 'visible' : 'invisible'}`} onClick={onClose}>
         <div className={`bg-green rounded-sm shadow p-2 transition-all duration-500 ${open ? 'h-1/8 opacity-100':'opacity-0'}`} onClick={(e)=>{e.stopPropagation()}}>
            <button onClick={onClose}>
                <AiOutlineClose className='absolute top-2 right-2 p-1 rounded-lg text-white-400 hover:bg-gray-50 hover:text-gray-600 text-2xl'/>
            </button>
            {children}
         </div>
    </div> 
    );
}
 
export default Dialog;