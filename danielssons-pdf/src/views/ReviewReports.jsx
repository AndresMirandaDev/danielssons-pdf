import { useEffect } from "react";

import AppFormPicker from "../components/forms/AppFormPicker";
import useApi from "../hooks/useApi";
import usersApi from "../api/users";
import salaryReportsApi from "../api/salaryReports";
import AppForm from "../components/forms/AppForm";
import SubmitButton from "../components/forms/SubmitButton";

const ReviewReports = () => {
    const {data:reports, request:loadReports} = useApi(salaryReportsApi.getReports)
    const {data: users , request:loadUsers} =  useApi(usersApi.getAllUsers)

    useEffect(()=>{
        loadReports()
        loadUsers()
    },[])

    return ( 
        <div className="bg-black w-screen">
            <div className="text-white bg-gradient-to-b from-primaryOpacity to-dark rounded-lg md:flex h-screen p-12">
                <div className="bg-red-100 md:w-1/2">
                   <AppForm initialValues={{
                    user:''
                   }}
                   onSubmit={({user})=>console.log(user)}
                   >
                        <AppFormPicker items={users} placeholder='Välj användare' name='user'/>
                   </AppForm>
                </div>
                <div className="bg-yellow md:w-full">reports list</div>
            </div>
        </div> 
    );
}
 
export default ReviewReports;