import {AiOutlineClose} from 'react-icons/ai'

const Modal = ({open, onClose, children}) => {
    return ( 
    <div className={`fixed flex inset-0 justify-center items-center transition-colors ${open ? 'visible bg-black/40' : 'invisible'}`} onClick={onClose}>
         <div className={`bg-white rounded-xl shadow p-6 transition-all ${open ? 'scale-100 opacity-100':'scale-125 opacity-0'}`} onClick={(e)=>{e.stopPropagation()}}>
            <button onClick={onClose}>
                <AiOutlineClose className='absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600 text-2xl'/>
            </button>
            {children}
         </div>
    </div> 
    );
}
 
export default Modal;