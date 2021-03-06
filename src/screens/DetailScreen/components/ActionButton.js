import React, { useRef, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
//import CustomText
import CustomText from '../../../components/UI/CustomText';
//icon
import { Ionicons } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
//Animatable
import * as Animatable from 'react-native-animatable';
//Redux
import { useDispatch, useSelector } from 'react-redux';
//Action
import { addToCart, removeFavorite, addFavorite } from '../../../reducers';
import Messages from '../../../messages/user';
import Colors from '../../../utils/Colors';

//PropTypes check
import PropTypes from 'prop-types';

export const ActionButton = ({
  user,
  item,
  color,
  setShowSnackbar,
  FavoriteProducts,
  setModalVisible,
  setMessage,
}) => {
  const cartLoading = useSelector((state) => state.cart.isLoading);
  const unmounted = useRef(false);
  useEffect(() => {
    return () => {
      unmounted.current = true;
    };
  }, []);
  //Set Colors
  const dispatch = useDispatch()
  const carts = useSelector((state) => state.cart.cartItems);

  const addToCartAct =  () => {
    console.log('added to here' );
    console.log(item);
    dispatch({
      type: "ADD_CART",
      cartItem: item,
    });

   
        setModalVisible(true);
    
    
  };
  const toggleFavorite = () => {
 
      
  };
  return (
    <Animatable.View
      delay={1500}
      animation='fadeInUp'
      style={styles.actionContainer}
    >
      <View style={styles.action}>
     
          

        <TouchableOpacity
          style={[styles.addCart, { backgroundColor: color }]}
          onPress={addToCartAct}
        >
          {cartLoading ? (
            <ActivityIndicator size='small' color='#fff' />
          ) : (
            <CustomText style={styles.actionText}>Add to Cart</CustomText>
          )}
        </TouchableOpacity>
      </View>
    </Animatable.View>
  );
};

ActionButton.propTypes = {
  item: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
  setShowSnackbar: PropTypes.func.isRequired,
  FavoriteProducts: PropTypes.bool.isRequired,
  setModalVisible: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  action: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50 , 
    backgroundColor: '#fff',
  },
  addCart: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    height: 50,
  },
  favorite: {
    width: '18%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    paddingTop: 5,
    borderRadius: 5,
    height: 50,
  },
  actionText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#fff',
  },
});
