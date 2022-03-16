import React, { useEffect, useState, useCallback } from 'react';
import { View, StyleSheet, Platform, Dimensions } from 'react-native';
//Redux
import { useSelector, useDispatch } from 'react-redux';
//Action
import { fetchCart } from '../../reducers';
//component
import Colors from '../../utils/Colors';
import { Header, CartBody, TotalButton } from './components';
//Loader
import Loader from '../../components/Loaders/Loader';

const { height } = Dimensions.get('window');

export const CartScreen = (props) => {
 
  return (
    <View style={styles.container}>
      <Header user={user} carts={carts} navigation={props.navigation} />
    
        
      
    
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: Platform.OS === 'android' ? 70 : height < 668 ? 70 : 90,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  centerLoader: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: Platform.OS === 'android' ? 70 : height < 668 ? 70 : 90,
  },
});
