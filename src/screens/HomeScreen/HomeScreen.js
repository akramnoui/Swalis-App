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
    uri:
      'https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    title: 'Object Name 1',
    description:
      'loob lcccccccccccccccccccccccccccccccccccccccccccccccccccccccccsssssssssoob loob',
    occurence: 2,
    state: 'Broken',
  },
  {
    uri:
      'https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    title: 'Object Name 2',
    description: 'loob loob loob',
    occurence: 2,
    state: 'Broken',
  },
  {
    uri:
      'https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    title: 'Object Name 2',
    description: 'loob loob loob',
    occurence: 2,
    state: 'Broken',
  },
  {
    uri:
      'https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    title: 'Object Name 2',
    description: 'loob loob loob',
    occurence: 2,
    state: 'Broken',
  },
  {
    uri:
      'https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    title: 'Object Name 2',
    description: 'loob loob loob',
    occurence: 2,
    state: 'Broken',
  },
  {
    uri:
      'https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    title: 'Object Name 2',
    description: 'loob loob loob',
    occurence: 2,
    state: 'Broken',
  },
  {
    uri:
      'https://images.unsplash.com/photo-1521405617584-1d9867aecad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
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
        <View style={styles.container}>
          <Header
            scrollPoint={scrollY}
            navigation={navigation}
            products={products}
          ></Header>
          <Portal>
            <FloatButton />
          </Portal>
          <AnimatedFlatList
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => (
              <View style={styles.banner}>
                <Carousel />
              </View>
            )}
            scrollEventThrottle={1}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: { contentOffset: { y: scrollY } },
                },
              ],
              { useNativeDriver: true },
            )}
            data={items}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <CategorySection
                name={item.name}
                bg={item.bg}
                data={products}
                navigation={navigation}
              />
            )}
          />
        </View>
      )}
    </Provider>
  );
};
<FlatList
style={styles.gridView}
itemDimension={170}
data={items}
renderItem={({item}) => (
  <ArticleCard
    info={item}
    detail={() => {}
      // this.props.navigation.push('Item', {display: item})
    }
  />
)}
itemContainerStyle={{
  alignItems: 'center',
  justifyContent: 'center',
}}
spacing={15}
/>

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
  
});
