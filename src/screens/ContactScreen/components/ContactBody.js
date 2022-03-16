import React , {useState , useEffect} from "react";
import { View, StyleSheet , TextInput , Text , TouchableOpacity   } from "react-native";
import { Field, reduxForm } from 'redux-form';
import renderField from '../../PreOrderScreen/components/RenderField';


//Text
import CustomText from "../../../components/UI/CustomText";
import { TextIcon } from "./TextIcon";
import Colors from "../../../utils/Colors";
const validate = (values) => {
  const errors = {};
 
  return errors;
};

 
export const ContactBody = (props) => {


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
  const [email, onChangemail] = React.useState(null);
  const [name, onChangename] = React.useState(null);
  const [desc, onChangedesc] = React.useState(null);






  return (
    <View style={styles.footer}>
      <Text style={styles.title}> Homologuer un Produit  </Text>

      <Text style={styles.placeholder}> Nom de l'entreprise  </Text>
      <TextInput
        style ={styles.inputMulti}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Nom de l entreprise"
        keyboardType="default"
      />
            <Text style={styles.placeholder}> E-mail </Text>

         <TextInput
        style ={styles.inputMulti}
        onChangeText={onChangemail}
        value={email}
        placeholder="Adresse e-mail"
        keyboardType="email-address"
      />
            <Text style={styles.placeholder}> Nom Du Produit </Text>

       <TextInput
        style ={styles.inputMulti}
        onChangeText={onChangename}
        value={name}
        placeholder="Nom du produit"
        keyboardType="default"
      />
            <Text style={styles.placeholder}> Description </Text>
            <TextInput
        style ={styles.inputMulti}
        onChangeText={onChangedesc}
        value={desc}
        placeholder="Description du produit"
        keyboardType="default"
      />
        <TouchableOpacity
          onPress={() => {

            props.navigation.navigate('FinishOrder');
          }}
        >
          <View style={styles.btn}>
            <CustomText style={{ color: '#fff', fontSize: 16 }}>
            Soumettre
            </CustomText>
          </View>
        </TouchableOpacity>


    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,  fontWeight: '200',
    textAlign: "center",
    marginBottom: 20 , 
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
    color: '#000',
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
    fontSize: 17 , 
    fontWeight: "700" , 
    marginTop: 10 , 
  } , 
  btn: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.lighter_green,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    marginTop: 20,



  }
});
