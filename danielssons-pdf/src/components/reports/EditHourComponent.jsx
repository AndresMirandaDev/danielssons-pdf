const EditHourComponent = ({workDay}) => {
    const dayTotalHours = workDay.places.reduce((dayAccumulator, place) => {
        return dayAccumulator + place.hours;
      }, 0);

    return ( 
        <div>
            {dayTotalHours}
        </div> 
    );
}
 
export default EditHourComponent;



//make it editable, and handle the change to update the report