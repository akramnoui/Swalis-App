import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AddSubscriptionView } from "./components";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getCreditCardToken } from "../../utils/Tools";

const STRIPE_ERROR = "Payment service error. Try again later.";

export const AddCreditCardScreen = ({ navigation }) => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  // Handles submitting the payment request
  const onSubmit = async (creditCardInput) => {
    // Disable the Submit button after the request is sent
    // console.log(creditCardInput);
    setSubmitted(true);
    let creditCardToken;

      creditCardToken = '1234'
      
    navigation.navigate("PaymentScreen", { token: creditCardToken });
  };

  return (
    <View style={styles.container}>
      <View style={styles.backIcon}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name='arrow-left' size={30} color='black' />
        </TouchableOpacity>
      </View>
      <AddSubscriptionView
        error={error}
        submitted={submitted}
        onSubmit={onSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backIcon: {
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
