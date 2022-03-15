import React, { useState } from 'react';
import { Linking } from 'react-native';
import { FAB } from 'react-native-paper';
import Colors from '../../../utils/Colors';

export const FloatButton = () => {
  const [state, setState] = useState({ open: false });
  const onStateChange = ({ open }) => setState({ open });
  const { open } = state;
  return (
    <FAB.Group
      open={open}
      icon={open ? 'close' : 'comment'}
      color='#fff'
      fabStyle={{
        backgroundColor: '#ED0677',
        bottom: 10,
      }}
      actions={[
        {
          icon: 'phone',
          onPress: () => Linking.openURL('tel:+213780336039'),
        },
        {
          icon: 'chat-processing',
          onPress: () => Linking.openURL('http://swalis.dz/contact/'),
        },
        {
          icon: 'facebook-messenger',
          onPress: () =>
            Linking.openURL(
              'https://www.messenger.com/t/SwalisOfficiel  ',
            ),
        },
      ]}
      onStateChange={onStateChange}
      onPress={() => {
        if (open) {
          // do something if the speed dial is open
        }
      }}
    />
  );
};
