import React , {useState , useEffect} from "react";
import { View, StyleSheet , TextInput , Text  } from "react-native";
import { Field, reduxForm } from 'redux-form';
import renderField from '../../PreOrderScreen/components/RenderField';
import {Dropdown} from 'react-native-material-dropdown';


//Text
import CustomText from "../../../components/UI/CustomText";
import { TextIcon } from "./TextIcon";
import Colors from "../../../utils/Colors";
const validate = (values) => {
  const errors = {};
 
  return errors;
};

 
export const ContactBody = ({ getReceiver, checkValidation }) => {


  const states = [
    {
      value: 'Produit capilaire',
    },
    {
      value: 'Produit Hygiene',
    },
    {
      value: 'Soins et beauté',
    },
  ];
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.footer}>
   
      {/* <Text style={styles.placeholder}> Akram Noui </Text>
      <TextInput
        style ={styles.inputMulti}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
            <Text style={styles.placeholder}> Akram Noui </Text>

         <TextInput
        style ={styles.inputMulti}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
            <Text style={styles.placeholder}> Akram Noui </Text>

       <TextInput
        style ={styles.inputMulti}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
            <Text style={styles.placeholder}> Akram Noui </Text> */}

        {/* <Dropdown
            containerStyle={styles.dropDown}
            placeholder="State"
            style={{color:'#5AFFFF'}}
            data={states}
            labelTextStyle={{color:'#5AFFFF'}}
            itemTextStyle={{color:'#5AFFFF'}}
            baseColor='#5AFFFF'
            placeholderTextColor='#5AFFFF'
            overlayStyle={{padding: 10}}
            dropdownMargins={{ min: 30, max: 30 }}
            onChangeText={() => {}}
          />  */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,  fontWeight: '700',
    textAlign: "center",
    fontFamily: 'Gotham-Bold'
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: -20,
  },
  info: {
    marginTop: 20,
  },
  inputMulti: {
    textAlignVertical: 'top',
    marginTop:10,
    borderRadius: 5,
    padding: 20,
    color: Colors.white,
    marginVertical: 5,
    backgroundColor: '#EEE',
  },
  dropDown: {
    height: 60,
    borderRadius: 5,
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: '#5AFFFF',
    color: '#5AFFFF',
    marginTop: 10,
    marginBottom: 5,
    justifyContent:'flex-end',
    paddingHorizontal: 10, 
    paddingBottom:3   
  },
  placeholder : {
    
  }
});
