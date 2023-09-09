import { useFormikContext } from "formik";
import AppTextInput from "./AppTextInput";

const AppFormField = ({name, ...otherProps}) => {
    const {setFieldTouched, setFieldValue, values, errors} =  useFormikContext()


    return ( 
    <>
      <AppTextInput {...otherProps} onChange={(e)=>{setFieldValue(name, e.target.value)}} value={values[name]} />  
    </> 
    );
}
 
export default AppFormField;