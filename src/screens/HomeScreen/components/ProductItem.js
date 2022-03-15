import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
//Icon
import { useDispatch, useSelector } from 'react-redux';

import { AntDesign } from "@expo/vector-icons";
//Colors
import Colors from "../../../utils/Colors";
//NumberFormat
import NumberFormat from "../../../components/UI/NumberFormat";
//Text
import CustomText from "../../../components/UI/CustomText";
import { BlurView } from "expo-blur";
//PropTypes check
import PropTypes from "prop-types";
import { color } from "react-native-reanimated";

export const ProductItem = (props) => {
  const dispatch = useDispatch()

  const addToCartAct =  () => {
    dispatch({
      type: "ADD_CART",
      cartItem: props.item,
    });
  
   
    
    
  };
    return (
      <View style={{ width: 180  ,   borderRadius: 12,  backgroundColor: '#EEEEEE' , margin: 15 , paddingBottom: 20}}>
       
          <View
            style={{
              width: "100%",
              height: "70%" , 
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => {props.navigation.navigate("Detail", props.item );}} style= {styles.imageContainer}>
              <Image
                source={props.item.uri}
                style={styles.image}
               
              />
            </TouchableOpacity>
        
          </View>
          <View style={styles.center}>
            <CustomText style={styles.name}>{props.item.title}</CustomText>
          </View>
         
          <View style={styles.info}>
            <View style={styles.rate}>
              <AntDesign name='tag' color={Colors.lighter_green} size={20} />
              <Text style={styles.score}>2550 DA</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={addToCartAct}>
            <AntDesign name='plus' color='#FFFFFF' size={20} style={{justifyContent : 'center' , alignItems : 'center'} } />
            </TouchableOpacity>
          </View>
          <View style={{ marginHorizontal: 5 }}>
           
          </View>
      </View>
    );
  }




const styles = StyleSheet.create({
 imageContainer : {
   flex: 1 , 
   display : 'flex' , 
   justifyContent : 'center' ,
   alignItems : 'center' ,  
   width : '100%' , 
   height: '80%' , 
 } , 

  container: {
     flex: 1 , 
    borderRadius: 6,
  },
  image: {
    height: 150 , 
    width: 150 , 
    resizeMode: 'contain',
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,

  },
  center: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    paddingLeft: 10 , 

  },
  name: {
    color: Colors.black,
    fontSize: 18, fontWeight: '700' ,
    textAlign: "center",
  },
  info: {
    flexDirection: "row",
    width: '100%', 
    height: 70 , 
    alignItems: "center",
    justifyContent: 'space-between' , 
    paddingLeft: 10 , 
    paddingRight: 15 ,
  },
  rate: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingBottom: 2,
  },
  score: {
    fontSize: 17,
    fontWeight: '700' ,
    marginLeft: 5,
    color: Colors.text,
  },
  btn: {
    width: 40,
    height: 40,
    flexDirection: "row",
    backgroundColor: "#BEBEBE",
    alignItems: 'center' , 
    justifyContent: "center",
    borderRadius: 8,

  },
  detailBtn: {
    color: Colors.lighter_green,
    marginRight: 5,
  },
});
