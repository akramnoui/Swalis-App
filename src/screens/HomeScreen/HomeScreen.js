import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  FlatGrid,

  ScrollView,
  Image,
  TouchableOpacity,

  Text,
} from 'react-native';
//Redux
import { ProductItem } from "./components/ProductItem";
import img1 from   "../../assets/Images/2.png";

import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../reducers';
import ArticlesList from './ArticlesList';
//Colors
import Colors from '../../utils/Colors';
//Animation
import Animated from 'react-native-reanimated';
//Components
import {
  Carousel,
  Header,
  CategorySection,
  FloatButton,
  categories,
} from './components';
import Skeleton from '../../components/Loaders/SkeletonLoading';
import Snackbar from '../../components/Notification/Snackbar';
//FloatButton
import { Portal, Provider } from 'react-native-paper';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
//height
const { height } = Dimensions.get('window');

const items = [
  {
    uri:  require("../../assets/Images/1.png"),
    title: 'Object Name 1',
    description:
      'loob lcccccccccccccccccccccccccccccccccccccccccccccccccccccccccsssssssssoob loob',
    occurence: 2,
    state: 'Broken',
  },
  {
    uri:  require("../../assets/Images/2.png") , 
    title: 'Object Name 2',
    description: 'loob loob loob',
    occurence: 2,
    state: 'Broken',
  },
  {
    uri:
    require("../../assets/Images/4.png"),
    title: 'Object Name 2',
    description: 'loob loob loob',
    occurence: 2,
    state: 'Broken',
  },
  {
    uri:
    require("../../assets/Images/4.png"),
    title: 'Object Name 2',
    description: 'loob loob loob',
    occurence: 2,
    state: 'Broken',
  },
  {
    uri:
    require("../../assets/Images/5.png"),
    title: 'Object Name 2',
    description: 'loob loob loob',
    occurence: 2,
    state: 'Broken',
  },

];

 const  ArticleCard = (props) =>{
  return (
    <TouchableOpacity style={styles.container} onPress={props.detail}>
      <View>
        <Image
          source={{uri: props.info.uri}}
          style={{
            height: '70%',
            resizeMode: 'cover',
            borderTopRightRadius: 4,
            borderTopLeftRadius: 4,
          }}
        />
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 3,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
          <Text numberOfLines={1} style={styles.title}>
           {props.info.title}
          </Text>
          <Text numberOfLines={2} style={styles.description}>
            {props.info.state}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}







export const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.store.products);

  //Header Animation
  let scrollY = new Animated.Value(0);
  const user = useSelector((state) => state.auth.user);
 
  const isLoading = useSelector((state) => state.store.isLoading);
  const notification = useSelector((state) => state.auth.notification);

 
  

  //fetch Api
  useEffect(() => {
    // AsyncStorage.removeItem("isFirstTime");
    const fetching = async () => {
      try {
        await dispatch(fetchProducts());
      } catch (err) {
        alert(err);
      }
    };
    fetching();
  }, [user.userid]);

  return (
    <Provider>
      {isLoading ? (
        <Skeleton />
      ) : (
        <View style={styles.container1}>
          <Header
            scrollPoint={scrollY}
            navigation={navigation}
            products={products}
          ></Header>
             
          <Portal>
            <FloatButton />
          </Portal>
          <View style={styles.banner}>
                <Carousel />
              </View>
              <View style={styles.productList}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.title}
            numColumns={2}
            columnWrapperStyle={styles.list}
            renderItem={({ item }) => {
              return (
                <ProductItem
                  key={item.title}
                  item={item}
                  navigation={navigation}
                />
              );
            }}
          />
        </View>
        </View>
      )}
    </Provider>
  );
};



const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  banner : {
    marginTop: 50 
  } , 
  list: {
    flex: 1,
    backgroundColor : 'white', 
    
  },
  container: {
    height: 250,
    width: '90%',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 3,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    marginBottom: 3,
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    fontWeight: 'normal',
    flexWrap: 'wrap',
  },
  category: {
    height: 518,
    marginHorizontal: 5,
    marginVertical: 5,
    paddingVertical: 15,
    borderRadius: 5,
    overflow: "hidden",
  },
  background: {
    position: "absolute",
    resizeMode: "stretch",
    borderRadius: 5,
    height: 518,
    width: "100%",
    bottom: 0,
  },
  titleHeader: {
    marginHorizontal: 10,
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    color: Colors.light_green,
    fontWeight: "500",
  },
  list: {
    justifyContent: "space-between",
  },
  productList: {
    width: "100%",
    marginTop: 10,
    paddingHorizontal: 10,
  },
  seeMore: {
    // backgroundColor: "rgba(255, 255, 255, 0.9)",
    width: "100%",
    height: 45,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  seeMoreText: {
    fontSize: 14,
    color: Colors.lighter_green,
  },
  
});
