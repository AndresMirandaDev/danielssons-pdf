import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer' 
import colors from '../config/colors';
import useMonth from '../hooks/useMonth';
import Logo from '../assets/logo.png'
import WorkDayListPDF from './reports/WorkDayListPDF';
import useApi from '../hooks/useApi';
import salaryReports from '../api/salaryReports';

//mock report for developing
// const report = {
//     _id: "6517c3b8ffabdb0ff960e7ab",
//     worker: {
//         _id: "64e0ed62c17df4f4bbcb8429",
//         name: "Andres Miranda"
//     },
//     date: "2023-09-30T06:39:59.496Z",
//     workDays: [
//         {
//             date: "2023-09-01T06:39:59.000Z",
//             places: [
//                 {
//                     project: {
//                         _id: "64db7e4bc3dcda47b84fe74a",
//                         name: "Skogås",
//                         address: "Loftvägen 16 ",
//                         projectNumber: 360139
//                     },
//                     hours: 8,
//                     _id: "6517c3b8ffabdb0ff960e7ad"
//                 }
//             ],
//             _id: "6517c3b8ffabdb0ff960e7ac"
//         },
//         {
//             date: "2023-09-04T06:39:59.000Z",
//             places: [
//                 {
//                     project: {
//                         _id: "64db7e4bc3dcda47b84fe74a",
//                         name: "Skogås",
//                         address: "Loftvägen 16 ",
//                         projectNumber: 360139
//                     },
//                     hours: 8,
//                     _id: "6517c3b8ffabdb0ff960e7af"
//                 }
//             ],
//             _id: "6517c3b8ffabdb0ff960e7ae"
//         },
//         {
//             date: "2023-09-05T06:39:59.000Z",
//             places: [
//                 {
//                     project: {
//                         _id: "64d0cc5f21ba645438136208",
//                         name: "Täby skolan",
//                         address: "Täby skolan\n\n",
//                         projectNumber: 360030
//                     },
//                     hours: 2,
//                     _id: "6517c3b8ffabdb0ff960e7b1"
//                 },
//                 {
//                     project: {
//                         _id: "64db7e4bc3dcda47b84fe74a",
//                         name: "Skogås",
//                         address: "Loftvägen 16 ",
//                         projectNumber: 360139
//                     },
//                     hours: 5,
//                     _id: "6517c3b8ffabdb0ff960e7b2"
//                 }
//             ],
//             _id: "6517c3b8ffabdb0ff960e7b0"
//         },
//         {
//             date: "2023-09-06T06:39:59.000Z",
//             places: [
//                 {
//                     project: {
//                         _id: "64f59a1f490d0944640a1a1c",
//                         name: "Vårby",
//                         address: "Bäckgårdsvägen 22",
//                         projectNumber: 360140
//                     },
//                     hours: 8,
//                     _id: "6517c3b8ffabdb0ff960e7b4"
//                 }
//             ],
//             _id: "6517c3b8ffabdb0ff960e7b3"
//         },
//         {
//             date: "2023-09-07T06:39:59.000Z",
//             places: [
//                 {
//                     project: {
//                         _id: "64f59a1f490d0944640a1a1c",
//                         name: "Vårby",
//                         address: "Bäckgårdsvägen 22",
//                         projectNumber: 360140
//                     },
//                     hours: 8,
//                     _id: "6517c3b8ffabdb0ff960e7b6"
//                 }
//             ],
//             _id: "6517c3b8ffabdb0ff960e7b5"
//         },
//         {
//             date: "2023-09-08T06:39:59.000Z",
//             places: [
//                 {
//                     project: {
//                         _id: "64f59a1f490d0944640a1a1c",
//                         name: "Vårby",
//                         address: "Bäckgårdsvägen 22",
//                         projectNumber: 360140
//                     },
//                     hours: 8,
//                     _id: "6517c3b8ffabdb0ff960e7b8"
//                 }
//             ],
//             _id: "6517c3b8ffabdb0ff960e7b7"
//         },
//         {
//             date: "2023-09-11T06:39:59.000Z",
//             places: [
//                 {
//                     project: {
//                         _id: "64f59a1f490d0944640a1a1c",
//                         name: "Vårby",
//                         address: "Bäckgårdsvägen 22",
//                         projectNumber: 360140
//                     },
//                     hours: 8,
//                     _id: "6517c3b8ffabdb0ff960e7ba"
//                 }
//             ],
//             _id: "6517c3b8ffabdb0ff960e7b9"
//         },
//         {
//             date: "2023-09-12T06:39:59.000Z",
//             places: [
//                 {
//                     project: {
//                         _id: "64db7e4bc3dcda47b84fe74a",
//                         name: "Skogås",
//                         address: "Loftvägen 16 ",
//                         projectNumber: 360139
//                     },
//                     hours: 5,
//                     _id: "6517c3b8ffabdb0ff960e7bc"
//                 },
//                 {
//                     project: {
//                         _id: "64d0cc5f21ba645438136208",
//                         name: "Täby skolan",
//                         address: "Täby skolan\n\n",
//                         projectNumber: 360030
//                     },
//                     hours: 3,
//                     _id: "6517c3b8ffabdb0ff960e7bd"
//                 }
//             ],
//             _id: "6517c3b8ffabdb0ff960e7bb"
//         },
//         {
//             date: "2023-09-13T06:39:59.000Z",
//             places: [
//                 {
//                     project: {
//                         _id: "64d0cc5f21ba645438136208",
//                         name: "Täby skolan",
//                         address: "Täby skolan\n\n",
//                         projectNumber: 360030
//                     },
//                     hours: 8,
//                     _id: "6517c3b8ffabdb0ff960e7bf"
//                 }
//             ],
//             _id: "6517c3b8ffabdb0ff960e7be"
//         },
//         {
//             date: "2023-09-14T06:39:59.000Z",
//             places: [
//                 {
//                     project: {
//                         _id: "64d0cc5f21ba645438136208",
//                         name: "Täby skolan",
//                         address: "Täby skolan\n\n",
//                         projectNumber: 360030
//                     },
//                     hours: 8,
//                     _id: "6517c3b8ffabdb0ff960e7c1"
//                 }
//             ],
//             _id: "6517c3b8ffabdb0ff960e7c0"
//         }
//     ],
//     __v: 0
// }



const PDFFile = ({report}) => { //pass report as props
    


    const month = useMonth(new Date(report.date))
    const year = new Date(report.date).getFullYear()
    
    const reportTotalHours = report.workDays.reduce((accumulator, workDay) => {
        const dayTotalHours = workDay.places.reduce((dayAccumulator, place) => {
          return dayAccumulator + place.hours;
        }, 0);
    
        return accumulator + dayTotalHours;
      }, 0);

      const places = report.workDays
        .map((workDay) => workDay.places.map((place) => place.project.name))
        .flat()
        .filter((value, index, self) => self.indexOf(value) === index);
      

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
                <View style={styles.placesHeaderContainer}>
                    <Text style={styles.tableHeadText}>Arbetsplats</Text>
                    <Text style={styles.tableHeadText}>Summa timmar</Text>
                    <Text style={styles.tableHeadText}>Projekt  nummer</Text>
                </View>
                <View>
                 {places.map((place, index) => {
                    let totalHours = 0;
                    let projectNumber;

                        report.workDays.map((workDay) => {
                        workDay.places.map((p) => {
                        if (p.project.name === place) {
                            totalHours += p.hours;
                            projectNumber = p.project.projectNumber;
                        }
                        });
                    });
          return (
            <View key={index} style={styles.placesInfoContainer}>
                <Text style={styles.placesInfoText}>{place}</Text>
                <Text style={styles.placesInfoText}>{totalHours}</Text>
                <Text style={styles.placesInfoText}>{projectNumber}</Text>
            </View>
          );
        })}
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
        color:colors.medium

    },
    name:{
        color:colors.light,
        fontWeight:'extralight',
        color:colors.medium

    },
    info:{
        paddingLeft:40
    },
    month:{
        color:colors.light,
        fontWeight:'extralight',
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
    },
    placesHeaderContainer:{
        backgroundColor:colors.medium,
        borderTopLeftRadius:25,
        borderBottomRightRadius:25,
        flexDirection:'row',
        marginTop:20
    }
    ,
    placesInfoContainer:{
        marginTop:15,
        flexDirection:'row',
        backgroundColor:colors.light,
    },
    placesInfoText:{
        width:'30%',
        textAlign:'center'
    }
})
 
export default PDFFile;