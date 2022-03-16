import React , { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
   Animated,
  Platform,
  ActivityIndicator,
} from "react-native";
//Color
import Colors from "../../../utils/Colors";
//Icon
import { MaterialCommunityIcons } from "@expo/vector-icons";

//PropTypes check
import PropTypes from "prop-types";

const { height } = Dimensions.get("window");



export const Header = ({ navigation, scrollY, item }) => {

  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.toggleDrawer();
          }}
        >
          <MaterialCommunityIcons name='menu' size={25} color='#fff' />
        </TouchableOpacity>
      </View>
      
      <Image
        source={require("../../../assets/Images/14.jpg")}
        style={[
          styles.image,
          {
            marginTop: 10 , 
            opacity: 0.4,
            resizeMode: 'contain',
          },
        ]}
      />
    
    </View>
  );
};

Header.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  headerContainer: {
    position: "absolute",
    top: height < 668 ? 30 : 50,
    left: 15,
    zIndex: 10,
  },
  header: {
    alignItems: "center",
    height: 200,
    backgroundColor: "#000",
    justifyContent: "center",
  },
  image: {
    marginTop: 15,
    height: 250,
    resizeMode: "contain",
  },
});
