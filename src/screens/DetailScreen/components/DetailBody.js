import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
//Animatable
import * as Animatable from "react-native-animatable";
//icon
import { AntDesign } from "@expo/vector-icons";
//import CustomText
import CustomText from "../../../components/UI/CustomText";
//Color
import Colors from "../../../utils/Colors";
//number format
import NumberFormat from "../../../components/UI/NumberFormat";
//PropTypes check
import PropTypes from "prop-types";

const { width, height } = Dimensions.get("window");
const color = Colors.black;

export const DetailBody = (props) => {
  return (
    <View style={[styles.footer]}>
      <Animatable.View
        animation="lightSpeedIn"
        delay={1000}
        style={styles.footer_header}
      >
        <CustomText selectable={true} style={{ ...styles.title, color }}>
         {props.item.title}
        </CustomText>
      
      </Animatable.View>
      <View style={{ flexDirection: "row", marginTop: 10 }}>
        <Animatable.View animation="bounceIn" delay={1600}>
          <AntDesign name="star" size={15} color={color} />
        </Animatable.View>
        <Animatable.View animation="bounceIn" delay={1700}>
          <AntDesign name="star" size={15} color={color} />
        </Animatable.View>
        <Animatable.View animation="bounceIn" delay={1800}>
          <AntDesign name="star" size={15} color={color} />
        </Animatable.View>
        <Animatable.View animation="bounceIn" delay={1900}>
          <AntDesign name="star" size={15} color={color} />
        </Animatable.View>
        <Animatable.View animation="bounceIn" delay={2000}>
          <AntDesign name="star" size={15} color={color} />
        </Animatable.View>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        delay={1000}
        style={styles.description}
      >
        <CustomText
          style={{
            ...styles.title,
            fontSize: "34" , 
            fontWeight: "200",
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          Description
      </CustomText>
       
      
        <CustomText selectable={true} style={styles.detail}>
          {props.item.description}
        </CustomText>
      </Animatable.View>
    </View>
  );
};



const styles = StyleSheet.create({
  footer: {
    width,
    backgroundColor: "#EEE",
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 10,
    marginTop: 250,
    borderRadius: 30,
  },
  footer_header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: Colors.text,
    fontSize: 32, fontWeight: '600',
  },
  detail: {
    fontSize: 15,
    lineHeight: 20,
  },

  price: {
    color: "#fff",
  },
  description: {
    marginTop: 10,
  },
  infoContainer: {
    marginBottom: 10,
    flexDirection: "row",
  },
});
