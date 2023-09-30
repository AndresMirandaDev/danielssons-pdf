import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer' 
import colors from '../config/colors';
import useMonth from '../hooks/useMonth';
import Logo from '../assets/logo.png'
import WorkDayListPDF from './reports/WorkDayListPDF';

// const report = {
//     _id: "65138b0bca0892cf1047b134",
//     worker: {
//         _id: "64e0ed62c17df4f4bbcb8429",
//         name: "Andres Miranda"
//     },
//     date: "2023-09-11T06:39:45.967Z",
//     workDays: [
//         {
//             date: "2023-09-11T06:39:45.969Z",
//             places: [
//                 {
//                     project: {
//                         _id: "64db7e4bc3dcda47b84fe74a",
//                         name: "Skogås",
//                         address: "Loftvägen 16 ",
//                         projectNumber: 360139
//                     },
//                     hours: 8,
//                     _id: "651390695ea154573fa825e3"
//                 }
//             ],
//             _id: "651390695ea154573fa825e2"
//         },
//         {
//             date: "2023-09-11T06:39:45.969Z",
//             places: [
//                 {
//                     project: {
//                         _id: "64db7e4bc3dcda47b84fe74a",
//                         name: "Skogås",
//                         address: "Loftvägen 16 ",
//                         projectNumber: 360139
//                     },
//                     hours: 8,
//                     _id: "651390695ea154573fa825e3"
//                 }
//             ],
//             _id: "651390695ea154573fa825e2"
//         },
//         {
//             date: "2023-09-11T06:39:45.969Z",
//             places: [
//                 {
//                     project: {
//                         _id: "64db7e4bc3dcda47b84fe74a",
//                         name: "Skogås",
//                         address: "Loftvägen 16 ",
//                         projectNumber: 360139
//                     },
//                     hours: 8,
//                     _id: "651390695ea154573fa825e3"
//                 }
//             ],
//             _id: "651390695ea154573fa825e2"
//         },
//         {
//             date: "2023-09-11T06:39:45.969Z",
//             places: [
//                 {
//                     project: {
//                         _id: "64db7e4bc3dcda47b84fe74a",
//                         name: "Skogås",
//                         address: "Loftvägen 16 ",
//                         projectNumber: 360139
//                     },
//                     hours: 8,
//                     _id: "651390695ea154573fa825e3"
//                 }
//             ],
//             _id: "651390695ea154573fa825e2"
//         },
//         {
//             date: "2023-09-11T06:39:45.969Z",
//             places: [
//                 {
//                     project: {
//                         _id: "64db7e4bc3dcda47b84fe74a",
//                         name: "Skogås",
//                         address: "Loftvägen 16 ",
//                         projectNumber: 360139
//                     },
//                     hours: 8,
//                     _id: "651390695ea154573fa825e3"
//                 }
//             ],
//             _id: "651390695ea154573fa825e2"
//         },
//         {
//             date: "2023-09-11T06:39:45.969Z",
//             places: [
//                 {
//                     project: {
//                         _id: "64db7e4bc3dcda47b84fe74a",
//                         name: "Skogås",
//                         address: "Loftvägen 16 ",
//                         projectNumber: 360139
//                     },
//                     hours: 8,
//                     _id: "651390695ea154573fa825e3"
//                 }
//             ],
//             _id: "651390695ea154573fa825e2"
//         },
//         {
//             date: "2023-09-11T06:39:45.969Z",
//             places: [
//                 {
//                     project: {
//                         _id: "64db7e4bc3dcda47b84fe74a",
//                         name: "Skogås",
//                         address: "Loftvägen 16 ",
//                         projectNumber: 360139
//                     },
//                     hours: 8,
//                     _id: "651390695ea154573fa825e3"
//                 }
//             ],
//             _id: "651390695ea154573fa825e2"
//         },
//         {
//             date: "2023-09-11T06:39:45.969Z",
//             places: [
//                 {
//                     project: {
//                         _id: "64db7e4bc3dcda47b84fe74a",
//                         name: "Skogås",
//                         address: "Loftvägen 16 ",
//                         projectNumber: 360139
//                     },
//                     hours: 8,
//                     _id: "651390695ea154573fa825e3"
//                 }
//             ],
//             _id: "651390695ea154573fa825e2"
//         },
//         {
//             date: "2023-09-11T06:39:45.969Z",
//             places: [
//                 {
//                     project: {
//                         _id: "64db7e4bc3dcda47b84fe74a",
//                         name: "Skogås",
//                         address: "Loftvägen 16 ",
//                         projectNumber: 360139
//                     },
//                     hours: 8,
//                     _id: "651390695ea154573fa825e3"
//                 }
//             ],
//             _id: "651390695ea154573fa825e2"
//         },
//         {
//             date: "2023-09-11T06:39:45.969Z",
//             places: [
//                 {
//                     project: {
//                         _id: "64db7e4bc3dcda47b84fe74a",
//                         name: "Skogås",
//                         address: "Loftvägen 16 ",
//                         projectNumber: 360139
//                     },
//                     hours: 8,
//                     _id: "651390695ea154573fa825e3"
//                 }
//             ],
//             _id: "651390695ea154573fa825e2"
//         },
//     ],
// }

Font.register({
    family: 'Didact Gothic',
    src:'http://fonts.gstatic.com/s/didactgothic/v10/v8_72sD3DYMKyM0dn3LtWm4ooKQJV7rZJEeBgiz-w_g.ttf',
    fontWeight:'ultralight'
  });



const PDFFile = ({report}) => {
    const month = useMonth(new Date(report.date))
    const year = new Date(report.date).getFullYear()
    
    const reportTotalHours = report.workDays.reduce((accumulator, workDay) => {
        const dayTotalHours = workDay.places.reduce((dayAccumulator, place) => {
          return dayAccumulator + place.hours;
        }, 0);
    
        return accumulator + dayTotalHours;
      }, 0);
    
    return ( 
        <Document>
            <Page size='A4' style={styles.body}>
                <View style={styles.header}>
                    <View style={styles.info}>
                    <Text style={styles.title}>Lön Rapport</Text>
                    <Text style={styles.name}>{report.worker.name}</Text>
                    <Text style={styles.month}>{month} {year}</Text>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image src={Logo} style={{width:100, height:90, }}/>
                    </View>
                </View>
                    <View style={styles.tableHead}>
                        <Text style={styles.tableHeadText}>Datum</Text>
                        <Text style={styles.tableHeadText}>VeckoDag</Text>
                        <Text style={styles.tableHeadText}>Arbetsplatser</Text>
                        <Text style={styles.tableHeadText}>Timmar</Text>
                    </View>
                <View style={styles.table}>
                    {report.workDays.map((workDay)=>{
                        return <WorkDayListPDF workDay={workDay} key={workDay._id}/>
                    })}
                </View>
                <View style={styles.tableFooter}>
                    <Text style={styles.footerText}>Summa Timmar</Text>
                    <Text style={styles.footerText}>{reportTotalHours}</Text>
                </View>
            </Page>
        </Document>
     );
}

const styles =  StyleSheet.create({
    body:{

    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

    },
    imageContainer:{
        backgroundColor:colors.primaryOpacity,
        padding:20,
        borderTopLeftRadius:100,
        borderBottomRightRadius:50,
        borderBottomLeftRadius:5,
        width:300,
        flexDirection:"row",
        justifyContent:'center'
    },
    title:{
        fontSize:25,
        color:colors.light,
        marginBottom:2,
        fontFamily:'Didact Gothic',
        color:colors.medium

    },
    name:{
        color:colors.light,
        fontWeight:'extralight',
        fontFamily:'Didact Gothic',
        color:colors.medium

    },
    info:{
        paddingLeft:40
    },
    month:{
        color:colors.light,
        fontWeight:'extralight',
        fontFamily:'Didact Gothic',
        color:colors.medium
    },
    table:{
        backgroundColor:colors.light,
        borderRadius:25,
        overflow:'hidden'
    },
    tableHead:{
        flexDirection:"row",
        backgroundColor:colors.primaryOpacity,
        marginTop:10,
        borderTopLeftRadius:25,
        borderBottomRightRadius:25,
        padding:20,
    },
    tableHeadText:{
        textAlign:"center",
        color:colors.light,
        marginHorizontal:40
    },
    tableFooter:{
        flexDirection:'row',
        backgroundColor:colors.primaryOpacity,
        borderTopLeftRadius:25,
        borderBottomRightRadius:25,
        padding:20,
        justifyContent:'space-between'
    },
    footerText:{
        color:colors.light,
    }
})
 
export default PDFFile;