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

    return (
      <View style={{ width: "46%"  ,   borderRadius: 15,  backgroundColor: Colors.black , margin : 6 }}>
       
          <View
            style={{
              width: "100%",
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
              <AntDesign name='tag' color='#fed922' size={15} />
              <Text style={styles.score}>2550 DA</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={ () => {props.navigation.navigate("Detail", { item });}}>
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
     backgroundColor: Colors.red ,//"#EEEEEE",
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
    backgroundColor: Colors.black , 
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  name: {
    marginTop: 3,
    color: Colors.lighter_green,
    textAlign: "center",
    fontWeight: "500",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    marginHorizontal: 5,
    justifyContent: "space-between",
  },
  rate: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingBottom: 2,
  },
  score: {
    fontSize: 12,
    marginLeft: 5,
    color: Colors.text,
  },
  btn: {
    width: 40,
    height: 40,
    flexDirection: "row",
    backgroundColor: "#EEEEEE",
    alignSelf: "flex-end",
    alignItems: 'center' , 
    justifyContent: "center",
    marginBottom: 5,
    borderRadius: 8,
  },
  detailBtn: {
    color: Colors.lighter_green,
    marginRight: 5,
  },
});
