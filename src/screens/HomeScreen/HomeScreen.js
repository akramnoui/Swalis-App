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
import Category from './components/New/Category';


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
    uri:  require("../../assets/Images/10.png"),
    title: 'Shampoing Protecteur',
    description:
      'Huile de figue de Barbarie est obtenue à partir des pépins du figuier de Barbarie, elle est une bénédiction pour la peau car elle est riche en vitamine E et oméga 6.Grâce à son fort pouvoir antioxydant',
    occurence: 2,
    _id : 1,
    quantity: 100 ,
  },
  {
    uri:  require("../../assets/Images/13.png") , 
    title: 'Shampoing reparateur',
    description:
      'Huile de figue de Barbarie est obtenue à partir des pépins du figuier de Barbarie, elle est une bénédiction pour la peau car elle est riche en vitamine E et oméga 6.Grâce à son fort pouvoir antioxydant',
    occurence: 2,
    _id : 2,
    quantity: 1 ,
  },
  {
    uri:
    require("../../assets/Images/3.png"),
    title: 'Serum disciplinant',
    description:
      'Huile de figue de Barbarie est obtenue à partir des pépins du figuier de Barbarie, elle est une bénédiction pour la peau car elle est riche en vitamine E et oméga 6.Grâce à son fort pouvoir antioxydant',
    occurence: 2,
    _id : 3,
    quantity: 1 ,
  },
  {
    uri:
    require("../../assets/Images/6.png"),
    title: 'Gel douche grenade',
    description:
      'Huile de figue de Barbarie est obtenue à partir des pépins du figuier de Barbarie, elle est une bénédiction pour la peau car elle est riche en vitamine E et oméga 6.Grâce à son fort pouvoir antioxydant',
    occurence: 2,
    _id : 4,
    quantity: 1 ,
  },
  {
    uri:
    require("../../assets/Images/5.png"),
    title: 'Soin et beauté',
    description:
      'Huile de figue de Barbarie est obtenue à partir des pépins du figuier de Barbarie, elle est une bénédiction pour la peau car elle est riche en vitamine E et oméga 6.Grâce à son fort pouvoir antioxydant',
    occurence: 2,
    _id : 5,
    quantity: 1 ,
  },

];


//--------------------
const items2 = [
  {
    uri:  require("../../assets/Images/6.png"),
    title: 'Shampoing Protecteur',
    description:
      'Huile de figue de Barbarie est obtenue à partir des pépins du figuier de Barbarie, elle est une bénédiction pour la peau car elle est riche en vitamine E et oméga 6.Grâce à son fort pouvoir antioxydant',
    occurence: 2,
    _id : 1,
    quantity: 100 ,
  },
  {
    uri:  require("../../assets/Images/7.png") , 
    title: 'Shampoing reparateur',
    description:
      'Huile de figue de Barbarie est obtenue à partir des pépins du figuier de Barbarie, elle est une bénédiction pour la peau car elle est riche en vitamine E et oméga 6.Grâce à son fort pouvoir antioxydant',
    occurence: 2,
    _id : 2,
    quantity: 1 ,
  },
  {
    uri:
    require("../../assets/Images/3.png"),
    title: 'Serum disciplinant',
    description:
      'Huile de figue de Barbarie est obtenue à partir des pépins du figuier de Barbarie, elle est une bénédiction pour la peau car elle est riche en vitamine E et oméga 6.Grâce à son fort pouvoir antioxydant',
    occurence: 2,
    _id : 3,
    quantity: 1 ,
  },
  {
    uri:
    require("../../assets/Images/6.png"),
    title: 'Gel douche grenade',
    description:
      'Huile de figue de Barbarie est obtenue à partir des pépins du figuier de Barbarie, elle est une bénédiction pour la peau car elle est riche en vitamine E et oméga 6.Grâce à son fort pouvoir antioxydant',
    occurence: 2,
    _id : 4,
    quantity: 1 ,
  },
  {
    uri:
    require("../../assets/Images/5.png"),
    title: 'Soin et beauté',
    description:
      'Huile de figue de Barbarie est obtenue à partir des pépins du figuier de Barbarie, elle est une bénédiction pour la peau car elle est riche en vitamine E et oméga 6.Grâce à son fort pouvoir antioxydant',
    occurence: 2,
    _id : 5,
    quantity: 1 ,
  },

];

//------------------------------

const items3 = [
  {
    uri:  require("../../assets/Images/9.png"),
    title: 'Shampoing Protecteur',
    description:
      'Huile de figue de Barbarie est obtenue à partir des pépins du figuier de Barbarie, elle est une bénédiction pour la peau car elle est riche en vitamine E et oméga 6.Grâce à son fort pouvoir antioxydant',
    occurence: 2,
    _id : 1,
    quantity: 100 ,
  },
  {
    uri:  require("../../assets/Images/8.png") , 
    title: 'Shampoing reparateur',
    description:
      'Huile de figue de Barbarie est obtenue à partir des pépins du figuier de Barbarie, elle est une bénédiction pour la peau car elle est riche en vitamine E et oméga 6.Grâce à son fort pouvoir antioxydant',
    occurence: 2,
    _id : 2,
    quantity: 1 ,
  },
  {
    uri:
    require("../../assets/Images/3.png"),
    title: 'Serum disciplinant',
    description:
      'Huile de figue de Barbarie est obtenue à partir des pépins du figuier de Barbarie, elle est une bénédiction pour la peau car elle est riche en vitamine E et oméga 6.Grâce à son fort pouvoir antioxydant',
    occurence: 2,
    _id : 3,
    quantity: 1 ,
  },
  {
    uri:
    require("../../assets/Images/6.png"),
    title: 'Gel douche grenade',
    description:
      'Huile de figue de Barbarie est obtenue à partir des pépins du figuier de Barbarie, elle est une bénédiction pour la peau car elle est riche en vitamine E et oméga 6.Grâce à son fort pouvoir antioxydant',
    occurence: 2,
    _id : 4,
    quantity: 1 ,
  },
  {
    uri:
    require("../../assets/Images/5.png"),
    title: 'Soin et beauté',
    description:
      'Huile de figue de Barbarie est obtenue à partir des pépins du figuier de Barbarie, elle est une bénédiction pour la peau car elle est riche en vitamine E et oméga 6.Grâce à son fort pouvoir antioxydant',
    occurence: 2,
    _id : 5,
    quantity: 1 ,
  },

];

//-------------------------------------------
const items4 = [
  {
    uri:  require("../../assets/Images/3.png"),
    title: 'Shampoo Miel',
    description:
      'Huile de figue de Barbarie est obtenue à partir des pépins du figuier de Barbarie, elle est une bénédiction pour la peau car elle est riche en vitamine E et oméga 6.Grâce à son fort pouvoir antioxydant',
    occurence: 2,
    _id : 1,
    quantity: 100 ,
  },
  {
    uri:  require("../../assets/Images/1.png") , 
    title: 'Shampoo Citrus',
    description:
      'Huile de figue de Barbarie est obtenue à partir des pépins du figuier de Barbarie, elle est une bénédiction pour la peau car elle est riche en vitamine E et oméga 6.Grâce à son fort pouvoir antioxydant',
    occurence: 2,
    _id : 2,
    quantity: 1 ,
  },
  {
    uri:
    require("../../assets/Images/3.png"),
    title: 'After shampoo',
    description:
      'Huile de figue de Barbarie est obtenue à partir des pépins du figuier de Barbarie, elle est une bénédiction pour la peau car elle est riche en vitamine E et oméga 6.Grâce à son fort pouvoir antioxydant',
    occurence: 2,
    _id : 3,
    quantity: 1 ,
  },
  {
    uri:
    require("../../assets/Images/6.png"),
    title: 'Gel douche',
    description:
      'Huile de figue de Barbarie est obtenue à partir des pépins du figuier de Barbarie, elle est une bénédiction pour la peau car elle est riche en vitamine E et oméga 6.Grâce à son fort pouvoir antioxydant',
    occurence: 2,
    _id : 4,
    quantity: 1 ,
  },
  {
    uri:
    require("../../assets/Images/5.png"),
    title: 'Soin et beauté',
    description:
      'Huile de figue de Barbarie est obtenue à partir des pépins du figuier de Barbarie, elle est une bénédiction pour la peau car elle est riche en vitamine E et oméga 6.Grâce à son fort pouvoir antioxydant',
    occurence: 2,
    _id : 5,
    quantity: 1 ,
  },

];

//-------------------------------------------







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
    const fetching =  () => {
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
            products={items}
          ></Header>
             
          <Portal>
            <FloatButton />
          </Portal>
          
         

              <ScrollView
                        scrollEventThrottle={16}
                    >
                       <View style={styles.banner}>
          <Text style={{ fontSize: 30, fontWeight: '200' , paddingHorizontal: 20  , marginBottom: 10}}>
                                Bonjour,  Akram !
                    
                            </Text>
                            <Text style={{ fontSize: 38, fontWeight: '700' , paddingHorizontal: 20  , marginBottom: 10}}>
                                Découvrez nos {'\n'}Produits 
                            </Text>
                <Carousel />
              </View>
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20  , marginBottom: 10}}>
                            À la une : Les plus vendus
                            </Text>

                     
                              
                                 
                                  <FlatList
                                      data={items}
                                      keyExtractor={(item) => item.title}
                                      horizontal= {true}
                                      contentContainerStyle={{backgroundColor: 'white' , flexDirection: 'row' , alignItems: 'center' , justifyContent: 'center'}}
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
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20  , marginBottom: 10}}>
                                Produits Capilaires
                            </Text>

                     
                              
                                 
                                  <FlatList
                                      data={items4}
                                      keyExtractor={(item) => item.title}
                                      horizontal= {true}
                                      contentContainerStyle={{backgroundColor: 'white' , flexDirection: 'row' , alignItems: 'center' , justifyContent: 'center'}}
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
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 , paddingBottom: 20}}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20  , marginBottom: 10}}>
                               Soins et Beauté
                            </Text>

                     
                              
                                 
                                  <FlatList
                                      data={items2}
                                      keyExtractor={(item) => item.title}
                                      horizontal= {true}
                                      contentContainerStyle={{backgroundColor: 'white' , flexDirection: 'row' , alignItems: 'center' , justifyContent: 'center'}}
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
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 , paddingBottom: 20}}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20  , marginBottom: 10}}>
                                Hygiéne
                            </Text>

                     
                              
                                 
                                  <FlatList
                                      data={items3}
                                      keyExtractor={(item) => item.title}
                                      horizontal= {true}
                                      contentContainerStyle={{backgroundColor: 'white' , flexDirection: 'row' , alignItems: 'center' , justifyContent: 'center'}}
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
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 , paddingBottom: 20}}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20  , marginBottom: 10}}>
                                En Promotion
                            </Text>

                     
                              
                                 
                                  <FlatList
                                      data={items4}
                                      keyExtractor={(item) => item.title}
                                      horizontal= {true}
                                      contentContainerStyle={{backgroundColor: 'white' , flexDirection: 'row' , alignItems: 'center' , justifyContent: 'center'}}
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
                    </ScrollView>



          {/* <FlatList
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
          /> */}

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
    marginTop: 60 
  } , 
  list: {
    flex: 1,
    backgroundColor : 'white', 
    // display : 'flex' , 
    // justifyContent: 'space-evenly' ,
    
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
    flex: 1 , 
    flexDirection: 'row', 
    alignItems : 'center' , 
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
