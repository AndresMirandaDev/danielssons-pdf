import { useFormikContext } from "formik";
import AppButton from "../AppButton";

const SubmitButton = ({title,color,textColor, ...otherProps}) => {
    const {handleSubmit} = useFormikContext()

    return (  <AppButton title={title} onClick={handleSubmit} {...otherProps} color={color} textColor={textColor}/>
);
}
 
export default SubmitButton;