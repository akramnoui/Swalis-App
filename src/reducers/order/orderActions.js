import { API_URL } from "../../utils/Config";
import { timeoutPromise } from "../../utils/Tools";
export const ORDER_LOADING = "ORDER_LOADING";
export const ORDER_FAILURE = "ORDER_FAILURE";
export const FETCH_ORDER = "FETCH_ORDER";
export const ADD_ORDER = "ADD_ORDER";
export const ERROR = "ERROR";

//Fetch order
export const fetchOrder = () => {
  return async (dispatch, getState) => {
    dispatch({
      type: ORDER_LOADING,
    });
    const user = getState().auth.user;
    if (user.userid == undefined) {
      return;
    }
 
    
      // const resData = await response.json();
      // const filterUserOrder = resData.content.filter(
      //   (userOrder) => userOrder.userId._id === user.userid
      // );
      // dispatch({
      //   type: FETCH_ORDER,
      //   orderData: filterUserOrder,
      // });
  };
};

//Add order
export const addOrder = (
  token,
  orderItems,
  name,
  totalAmount,
  paymentMethod,
  fullAddress,
  phone
) => {
  return async (dispatch, getState) => {
    dispatch({
      type: ORDER_LOADING,
    });
    const user = getState().auth.user;

    
      const resData =  {
        userId: user.userid,
        items: orderItems,
        name,
        totalAmount,
        paymentMethod,
        address: fullAddress,
        phone,
      };
      console.log('In reducer');
      console.log(resData);
      dispatch({
        type: ADD_ORDER,
        orderItem: resData,
      });
  };
};
