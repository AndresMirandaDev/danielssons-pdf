import colors from "../config/colors";

const AppButton = ({title, onClick, color,textColor, ...otherProps}) => {

    return (  <button {...otherProps} className={`w-full rounded-md p-3 m-1 text-${textColor} uppercase font-semibold hover:shadow-lg hover:opacity-80 duration-500 bg-${color}`}onClick={onClick}>{title}</button>
 );
}
 
export default AppButton;