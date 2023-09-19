import AppSelectOption from "./AppSelectOption";
import { useFormikContext } from "formik";

const AppFormPicker = ({items, name, placeholder}) => {
    const { errors, setFieldValue, touched, values, } = useFormikContext();

    const handleChange = (item) =>{
        setFieldValue(name, item)

    }
    return ( 
    <select className="text-white p-2 rounded-lg bg-primaryOpacity block m-1 w-full" onChange={(e)=>handleChange(e.target.value)}>
        <option value=''>{placeholder}</option>
        {items.map((item)=>{
            return (
            <AppSelectOption key={item._id} label={item.name} placeholder={placeholder} value={item._id}/>
            )

        })}
    </select> 
    );
}
 
export default AppFormPicker;