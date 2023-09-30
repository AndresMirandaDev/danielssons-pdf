import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font, } from '@react-pdf/renderer' 
import colors from '../../config/colors';

const weekDays= {
    0: 'Söndag',
    1: 'Måndag',
    2: 'Tisdag',
    3: 'Onsdag',
    4: 'Torsdag',
    5: 'Fredag',
    6: 'Lördag',
  }

  Font.register({
    family: 'Didact Gothic',
    src:'http://fonts.gstatic.com/s/didactgothic/v10/v8_72sD3DYMKyM0dn3LtWm4ooKQJV7rZJEeBgiz-w_g.ttf',
    fontWeight:'ultralight'
  });

const WorkDayListPDF = ({workDay}) => {
    const date = new Date(workDay.date)
    const weekDay = date.getDay()    
    const dayTotalHours = workDay.places.reduce((dayAccumulator, place) => {
        return dayAccumulator + place.hours;
      }, 0)

    return ( 
         <View style={styles.row}>
            <Text style={styles.text}>{date.toLocaleDateString()}</Text>
            <Text style={styles.text}>{weekDays[weekDay]}</Text>
            <View style={styles.place}>
                {workDay.places.map((place)=>{
                    return <Text key={place._id} style={styles.text}>{place.project.name} {place.hours} (t)</Text>
                })}
            </View>
            <Text style={styles.text}>{dayTotalHours}</Text>
        </View>
         );
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        marginVertical:10,
        borderBottomColor:colors.medium,
        borderBottom:0.1
    },
    text:{
        fontWeight:'extralight',
        fontFamily:'Didact Gothic',
        textAlign:'center',
        marginHorizontal:40,
        color:colors.primaryOpacity

    }
})
 
export default WorkDayListPDF;