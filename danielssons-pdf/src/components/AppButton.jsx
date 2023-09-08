const AppButton = ({title, onClick ,...otherProps}) => {
    return (  <button {...otherProps} className="rounded-md bg-blue-500 p-3 text-white uppercase font-semibold" onClick={onClick}>{title}</button>
 );
}
 
export default AppButton;