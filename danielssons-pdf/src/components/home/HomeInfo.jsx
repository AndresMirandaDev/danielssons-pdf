const HomeInfo = ({data, label, icon}) => {
    const textClass = "text-white font-extralight text-center m-6"

    return ( 
        <div className="m-1 p-4 rounded-lg bg-blend-overlay relative bg-dark bg-opacity-30 hover:scale-[1.03] duration-500 grid justify-center items-center">
            <span className="text-white absolute text-[19rem] h-full w-full md:flex justify-center items-center opacity-10 hidden">
                {icon && icon}
            </span>
            <div className={`${textClass} text-3xl`}>{label}</div>
            <div className={`${textClass} text-3xl md:text-7xl font-semibold`}>{data}</div>
        </div> 
    );
}
 
export default HomeInfo;