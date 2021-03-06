import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
//Text
import CustomText from '../../../components/UI/CustomText';
//Colors
import Colors from '../../../utils/Colors';
import NumberFormat from '../../../components/UI/NumberFormat';
//PropTypes check
import PropTypes from 'prop-types';

export class TotalButton extends React.PureComponent {
  render() {
    const { total, navigation, cartItems, cartId } = this.props;
    return (
      <View style={styles.total}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <CustomText
            style={{ fontSize: 14, fontWeight: '500', color: Colors.text }}
          >
         
          </CustomText>
          <NumberFormat price={total.toString()} style={{ fontSize: 14 }} />
        </View>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PreOrderScreen', {
              cartItems,
              total,
              cartId,
            });
          }}
        >
          <View style={styles.btn}>
            <CustomText style={{ color: '#fff', fontSize: 16 }}>
            Commander
            </CustomText>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  total: {
    width: '100%',
    position: 'absolute',
    bottom: 20,
    left: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  btn: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.lighter_green,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    marginTop: 5,
    marginBottom: 20,


    
  },
  price: {
    color: 'red',
    fontSize: 16,
  },
});
