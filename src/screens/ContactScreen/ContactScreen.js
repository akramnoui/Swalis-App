import React from "react";
import { View, StyleSheet , ScrollView} from "react-native";
//Components
import { Header, ContactBody } from "./components";

export const ContactScreen = ({ navigation }) => {
  return (
    
    <View style={styles.container}>
      <Header navigation={navigation} />
      
      <ContactBody navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
});
