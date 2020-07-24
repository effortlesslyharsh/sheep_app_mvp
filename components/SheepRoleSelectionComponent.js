import React from 'react'
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import * as SheepConstants from '../constants/SheepConstants';
import {Dimensions} from 'react-native';
import * as DisplayStrings from '../constants/SheepDisplayStrings';
import sheepImage from '../images/sheepVector.png';

const RoleSelectionComponent = props =>{
    return(
        <View style={styles.parentContainer}>
        <Image style={styles.imageStyle} source = {sheepImage} />
        <Text style={styles.headerDisplayTextStyle}>{DisplayStrings.SHEEP_HEADER_DISPLAY_WELCOME_MSG}</Text>
        <View style={styles.role}>
            <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.textStyle}>{DisplayStrings.SHEEP_I_AM_A_WEAVER}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle}>
                    <Text style={styles.textStyle}>{DisplayStrings.SHEEP_I_NEED_A_SWEATER}</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}

const styles = StyleSheet.create(
    { 
        parentContainer:{
            width:Dimensions.get("window").width,
            height:Dimensions.get("window").height,
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-around"
       },
        role:{
            flexDirection:"row",
            justifyContent:"space-around",
            height:Dimensions.get('window').height/8,
        },
        textStyle:{
            color:SheepConstants.APP_THEME_WHITE,
            fontFamily:'sans-serif',
            fontSize:20,
            alignContent:"center",
            justifyContent:"space-between"

        },
        buttonStyle:{
            color:SheepConstants.APP_THEME_DARK,
            height:Dimensions.get('window').height/8,
            width:Dimensions.get("window").width/2.5,
            backgroundColor:SheepConstants.APP_THEME_DARK,
            alignContent:"center",
            alignItems:"center",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
        },
        headerDisplayTextStyle:{
            color:SheepConstants.APP_TEXT_GREY,
            fontFamily:'Roboto',
            fontSize:15,
            alignContent:"center",
            justifyContent:"space-between",
            margin:50
        },
        imageStyle:{
            width:Dimensions.get("window").width,
            height:300
        }
    }
);

export default RoleSelectionComponent;