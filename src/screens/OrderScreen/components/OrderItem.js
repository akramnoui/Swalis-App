import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, FlatList , ScrollView } from "react-native";
//Colors
import Colors from "../../../utils/Colors";
import { SummaryOrder2 } from './SummaryOrder2';//Item
import PreOrderItem from "../../PreOrderScreen/components/PreOrderItem";
//Number format
import NumberFormat from "../../../components/UI/NumberFormat";
//Moment
import moment from "moment";
import "moment/min/locales";
//PropTypes check
import PropTypes from "prop-types";
import CustomText from "../../../components/UI/CustomText";
import Steps from "../../../components/UI/Steps";

moment.locale("vi");

export const OrderItem = ( props ) => {
  const [showDetails, setShowDetails] = useState(false);
  const status = () => {
    switch (props.order.status) {
      case "waiting":
        return 0;
      case "confirmed":
        return 1;
      case "delivery":
        return 2;
      default:
        return 3;
    }
  };
  return (
    <ScrollView
    scrollEventThrottle={16}
>
    <View style={styles.container}>
      <View style={styles.summary}>
        <View style={styles.textContainer}>
          <CustomText style={styles.text}>Code unique :
 </CustomText>
          <CustomText style={styles.detail}>
            CT-GHXVRMND
          </CustomText>
        </View>

        <View style={styles.textContainer}>
          <CustomText style={styles.text}>Date de réservation:
</CustomText>
          <CustomText style={styles.detail}>
            18/03/2021
          </CustomText>
        </View>
        <View style={styles.detailButtom}>
          <TouchableOpacity onPress={() => {console.log('in OrderItem') ; console.log( props.order ) ; setShowDetails((prev) => !prev)  }}>
            <CustomText style={{ fontSize: 15, color: "#fff" }}>
              {showDetails ? "Masquer la commande" : "Détails de la commande"}
            </CustomText>
          </TouchableOpacity>
        </View>
        {showDetails ? (
          <View>
            <View style={styles.textContainer}>
              <CustomText style={styles.text}>Nom du destinataire:
 </CustomText>
              <CustomText style={styles.detail}>{props.order.name}</CustomText>
            </View>

            <View style={styles.textContainer}>
              <CustomText style={styles.text}>Adresse:
 </CustomText>
              <CustomText style={styles.detail}>{props.order.address}</CustomText>
            </View>
            <View style={styles.textContainer}>
              <CustomText style={styles.text}>Numéro de téléphone:
</CustomText>
              <CustomText style={styles.detail}>{props.order.phone}</CustomText>
            </View>
            <View style={styles.textContainer}>
              <CustomText style={styles.text}>
              Méthodes de payement:
{" "}
              </CustomText>
              <CustomText style={styles.detail}>
                {props.order.paymentMethod}
              </CustomText>
              
            </View>
            <View style={styles.steps}>
              <Steps position={status()} />
            </View>

            
      
            <SummaryOrder2 cartItems={props.order.items} total={'1'} />

           

            {/* <FlatList
              data={order.items}
              keyExtractor={(item) => item.item._id}
              renderItem={({ item }) => {
                return <PreOrderItem item={item} />;
               
              }}
            /> */}
            <View
              style={{
                ...styles.textContainer,
                marginTop: 30,
                justifyContent: "space-between",
              }}
            >
              <CustomText style={{fontSize: 20 ,fontWeight: '800' ,  color: Colors.lighter_green}}>Montant total
</CustomText>
<CustomText style={{fontSize: 20 ,fontWeight: '800' ,  color: Colors.black}}>1800 DA
</CustomText>
            </View>
          </View>
        ) : (
          <View />
        )}
      </View>
    </View>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.grey,
    backgroundColor: Colors.white,
    borderRadius: 5,
    paddingBottom: 60 , 
    paddingHorizontal: 10,
    marginBottom: 40,
  },
  detailButtom: {
    backgroundColor: Colors.lighter_green,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 5,
    marginVertical: 15,
  },
  textContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  detail: {
    color: Colors.lighter_green,
  },
  steps: {
    width: "100%",
    height: 100,
  },
});

export default OrderItem;
