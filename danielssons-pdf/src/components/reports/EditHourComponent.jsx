import { useState } from "react";
import AppForm from "../forms/AppForm";
import AppFormField from "../forms/AppFormField";
import SubmitButton from "../forms/SubmitButton";

const EditHourComponent = ({workDay, updateReport}) => {
    const [places, setPlaces] = useState([...workDay.places])  
   



    return ( 
        <div >
            {
                workDay.places.map((place)=>{
                    return (
                        <AppForm 
                            key={place._id}
                            initialValues={{
                                hours:place.hours
                            }}

                            onSubmit={({hours})=>{
                                const updatedPlace = {
                                    project:{
                                        name:place.project.name,
                                        _id:place.project._id,
                                        address:place.project.address,
                                        projectNumber:place.project.projectNumber //maybe just send the id 
                                    },
                                    hours:parseInt(hours),
                                    _id:place._id
                                }
                                const filteredPlaces = places.filter((p)=>{
                                    return p._id !== updatedPlace._id
                                })

                                
                                
                                //raise the event to update the report passing the updated workDay array to the function as parameter
                                 const updatedWorkDay = {
                                    date:workDay.date,
                                    places:[...filteredPlaces, updatedPlace],
                                 }

                                updateReport(updatedWorkDay, workDay._id)
                            }}
                        >
                            <AppFormField placeholder={`${place.project.name} ${place.hours}`} name='hours'/>
                            <SubmitButton title='uppdatera' color='primary' type='submit'/>
                        </AppForm>

                    )
                })
            }
        </div>
    );
}
 
export default EditHourComponent;



//make it editable, and handle the change to update the report