import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Platform,
  FlatList,
  FlatGrid,
  AsyncStorage,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../reducers';
import ArticleCard from './ArticleCard';
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
const Products = {}

export const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  //Header Animation
  let scrollY = new Animated.Value(0);
  const user = useSelector((state) => state.auth.user);
 
  const isLoading = useSelector((state) => state.store.isLoading);
  const notification = useSelector((state) => state.auth.notification);



const items = [
  {
    title: 'Numbers',
    data: [
      {
        uri:
          'https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        title: 'shampoing 1',
        description: 'Produit cosmetique',
        occurence: 2,
        state: 'Broken',
      },
      {
        uri:
          'https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        title: 'shampoing 2',
        description: 'Produit cosmetique',
        occurence: 2,
        state: 'Broken',
      },
      {
        uri:
          'https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        title: 'shampoing 3',
        description: 'Produit cosmetique',
        occurence: 2,
        state: 'Broken',
      },
      {
        uri:
          'https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        title: 'shampoing 3',
        description: 'Produit cosmetique',
        occurence: 2,
        state: 'Broken',
      },
      {
        uri:
          'https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        title: 'shampoing 3',
        description: 'Produit cosmetique',
        occurence: 2,
        state: 'Broken',
      },
    ],
  },
  {
    title: 'Cards',
    data: [
      {
        uri:
          'https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        title: 'shampoing 1',
        description: 'Produit cosmetique',
        occurence: 2,
        state: 'Broken',
      },
      {
        uri:
          'https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        title: 'shampoing 2',
        description: 'Produit cosmetique',
        occurence: 2,
        state: 'Broken',
      },
      {
        uri:
          'https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        title: 'shampoing 2',
        description: 'Produit cosmetique',
        occurence: 2,
        state: 'Broken',
      },
      {
        uri:
          'https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
        title: 'shampoing 2',
        description: 'Produit cosmetique',
        occurence: 2,
        state: 'Broken',
      },
    ],
  },
];
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
        <View style={styles.container}>
          <Header
            scrollPoint={scrollY}
            navigation={navigation}
            products={products}
          ></Header>
          <Portal>
         
          </Portal>
          <View style={styles.banner}>
                <Carousel />
              </View>
              <ScrollView>
                <FlatGrid
                  style={styles.gridView}
                  itemDimension={170}
                  data={items}
                  renderItem={({item}) => (
                    <ArticleCard
                      info={item}
                      detail={() =>
                        this.props.navigation.push('Item', {display: item})
                      }
                    />
                  )}
                  itemContainerStyle={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  spacing={15}
                />
              </ScrollView>
        
          {Object.keys(notification).length === 0 ? (
            <View />
          ) : (
            <Snackbar
              checkVisible={true}
              message={
                Object.keys(user).length === 0
                  ? notification
                  : notification + ' ' + user.name
              }
            />
          )}
        </View>
      )}
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  list: {
    width: '100%',
    marginTop: 50,
    paddingBottom: 20,
  },
});
