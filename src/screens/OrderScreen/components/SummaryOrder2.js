import React from "react";
import { View, StyleSheet } from "react-native";
//Number
import NumberFormat from "../../../components/UI/NumberFormat";
//PreOrderItem
import PreOrderItem from "../../PreOrderScreen/components/PreOrderItem";

//Text
import CustomText from "../../../components/UI/CustomText";
import Colors from "../../../utils/Colors";
//PropTypes check
import PropTypes from "prop-types";

export class SummaryOrder2 extends React.PureComponent {
  render() {
    const { cartItems, total } = this.props;
    return (
      <View style={styles.container}>
        <CustomText style={{ ...styles.title, marginHorizontal: 60 }}>
        Récapitulatif de la commande
        </CustomText>
        <View style={{ backgroundColor: "#fff", paddingHorizontal: 10 }}>
          {cartItems.map((item) => {
            return (
              <View key={item.item._id}>
                <PreOrderItem item={item} />
              </View>
            );
          })}
        </View>
      
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 65,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: "700",
    marginVertical: 20,
    marginHorizontal: 10,
  },
});

