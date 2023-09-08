const AppTextInput = ({icon,label, ...otherProps}) => {
    return ( 
        <div className="flex-column">
        <label className="block mb-2 text-sm font-medium text-light" htmlFor={label}>{label}</label>
        <div className="flex w-40 bg-transparent border border-primary rounded-md justify-center items-center" >
            <div className="m-2">
                {icon&&icon}
            </div>
            <input id={label} className="border-0 text-white text-sm block w-full p-2.5 bg-transparent" {...otherProps} />
        </div>
        </div>
     );
}
 
export default AppTextInput;