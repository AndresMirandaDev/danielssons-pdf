const AppTextInput = ({icon,label, ...otherProps}) => {
    return (
        <>
        <label className="block text-sm font-medium text-light" htmlFor={label}>{label}</label>
        <div className="flex-column border border-primary rounded-md">
        <div className="flex w-full bg-transparent items-center" >
            <div className="m-2">
                {icon&&icon}
            </div>
            <input id={label} className="border-0 text-white text-sm block w-full p-2.5 bg-transparent" {...otherProps} />
        </div>
        </div>
        </> 
     );
}
 
export default AppTextInput;