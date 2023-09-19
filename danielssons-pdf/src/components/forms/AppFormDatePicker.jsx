import { useFormikContext } from "formik";


const AppFormDatePicker = ({name, ...otherProps}) => {
    const {setFieldValue, values, errors} = useFormikContext()

    return ( 
        <input className="text-white p-2 rounded-lg bg-primaryOpacity m-1 w-full" {...otherProps} onChange={(e)=>{setFieldValue(name, e.target.value)}}/>
     );
}
 
export default AppFormDatePicker;