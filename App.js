import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//Redux
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//Reducer
import {
  authReducer,
  cartReducer,
  favoriteReducer,
  orderReducer,
  productReducer,
} from "./src/reducers";
//Navigator
import { AppNavigator } from "./src/navigation";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";

//redux form
import { reducer as formReducer } from "redux-form";
//Notification
import LocalNotication from "./src/components/Notification/LocalNotification";

const rootReducer = combineReducers({
  store: productReducer,
  cart: cartReducer,
  order: orderReducer,
  auth: authReducer,
  fav: favoriteReducer,
  form: formReducer,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);
const LoadAssets = async () => {
  const imageAssets = Asset.loadAsync([
    require("./src/assets/Images/banner1.png"),
    require("./src/assets/Images/banner2.jpeg"),
    require("./src/assets/Images/banner3.jpeg"),
    require("./src/assets/Images/banner5.jpg"),
    require("./src/assets/Images/banner6.jpg"),
    require("./src/assets/Images/bg1.jpg"),
    require("./src/assets/Images/bg2.jpg"),
    require("./src/assets/Images/bg3.jpg"),
    require("./src/assets/Images/defaultprofile.jpg"),
    require("./src/assets/Images/flower3.jpg"),
    require("./src/assets/Images/logoNoText.png"),
    require("./src/assets/Images/logo1.png"),
    require("./src/assets/Images/logoTextWhite.png"),
    require("./src/assets/Images/slide1.png"),
    require("./src/assets/Images/slide2.png"),
    require("./src/assets/Images/slide3.png"),
    require("./src/assets/Images/social1.png"),
    require("./src/assets/Images/social2.png"),
    require("./src/assets/Images/social3.png"),
    require("./src/assets/Images/creditcards.png"),
    require("./src/assets/Images/faceid.png"),
    require("./src/assets/Images/1.png"),
    require("./src/assets/Images/2.png"),
    require("./src/assets/Images/3.png"),
    require("./src/assets/Images/4.png"),
    require("./src/assets/Images/5.png"),
  ]);
  const fetchFonts = Font.loadAsync({
    "Roboto-Bold": require("./src/assets/Fonts/Roboto-Bold.ttf"),
    "Roboto-BoldItalic": require("./src/assets/Fonts/Roboto-BoldItalic.ttf"),
    "Roboto-Italic": require("./src/assets/Fonts/Roboto-Italic.ttf"),
    "Roboto-LightItalic": require("./src/assets/Fonts/Roboto-LightItalic.ttf"),
    "Roboto-Medium": require("./src/assets/Fonts/Roboto-Medium.ttf"),
    "Roboto-MediumItalic": require("./src/assets/Fonts/Roboto-MediumItalic.ttf"),
    "Roboto-Regular": require("./src/assets/Fonts/Roboto-Regular.ttf"),
  });

  return await Promise.all([imageAssets, fetchFonts]);
};
export default function App() {
  return (
    <Provider store={store}>
    <StatusBar />
    <AppNavigator />
    </Provider>
    // <View style={styles.container}>
    //   <Text>Hello World
      
    //   </Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
