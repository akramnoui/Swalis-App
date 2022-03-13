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

export const ProductItem = (props) => {

    return (
      <View style={{ width: "48%" }}>
        <BlurView tint='light' intensity={70} style={styles.container}>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => {}} style= {styles.imageContainer}>
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
              <AntDesign name='star' color='#fed922' size={15} />
              <Text style={styles.score}>5.0</Text>
            </View>
            <NumberFormat price={props.item.occurence} />
          </View>
          <View style={{ marginHorizontal: 5 }}>
            <TouchableOpacity style={styles.btn} onPress={() =>{}}>
              <CustomText style={styles.detailBtn}>Details</CustomText>
            </TouchableOpacity>
          </View>
        </BlurView>
      </View>
    );
  }




const styles = StyleSheet.create({
 imageContainer : {
   width : '100%' , 
 backgroundColor : Colors.red
 } , 

  container: {
    backgroundColor : Colors.red , 
    height: 390,
     backgroundColor: "rgba(255, 255, 255, 0.9)",
    marginBottom: 15,
    borderRadius: 8,
  },
  image: {
    height: '70%',
              resizeMode: 'contain',
              borderTopRightRadius: 4,
              borderTopLeftRadius: 4,

  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    width: "100%",
    height: 35,
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.lighter_green,
  },
  detailBtn: {
    color: Colors.lighter_green,
    marginRight: 5,
  },
});
