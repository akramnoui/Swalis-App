import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";
//Redux
import { useDispatch } from "react-redux";
//Action
import { removeFromCart, addToCart, decCartQuantity } from "../../../reducers";
//Text
import CustomText from "../../../components/UI/CustomText";
//Colors
import Colors from "../../../utils/Colors";
import { CartItem } from "./CartItem";
import Messages from "../../../messages/user";
//PropTypes check
import PropTypes from "prop-types";

export const CartBody = ({
  navigation,
  user,
  carts,
  loadCarts,
  isRefreshing,
}) => {
  const dispatch = useDispatch();
  const onRemove = (itemId) => {
   
  };
  return (
    <View style={styles.footer}>
    
  
        <View style={{ marginBottom: 80 }}>
          <FlatList
            data={carts.items}
            onRefresh={loadCarts}
            refreshing={isRefreshing}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => {
              return (
                <CartItem
                  item={item}
                  onRemove={() => {
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      cartItem: item.item,
                    }) ;
                  }}
                  onAdd={() => {
                    dispatch({
                      type: "ADD_CART",
                      cartItem: item.item,
                    });
                  }}
                  onDes={() => {
                    dispatch(decCartQuantity(carts._id, item.item._id));
                  }}
                />
              );
            }}
          />
        </View>
     
    </View>
  );
};

CartBody.propTypes = {
  user: PropTypes.object.isRequired,
  carts: PropTypes.object.isRequired,
  loadCarts: PropTypes.func.isRequired,
  isRefreshing: PropTypes.bool.isRequired,
  navigation: PropTypes.object.isRequired,
};
const styles = StyleSheet.create({
  footer: {
    flex: 1,
  },
  nextButton: {
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: Colors.lighter_green,
    borderRadius: 5,
    borderColor: Colors.lighter_green,
    marginTop: 10,
  },
  center: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
