<<<<<<< HEAD
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';

//ACTION TYPES
const SET_USER = 'SET_USER';
const SET_PRODUCTS = 'SET_PRODUCTS';

//ACTION CREATORS
const setUser = user => ({
  type: SET_USER,
  user,
});

const setProducts = products => ({
  type: SET_PRODUCTS,
  products,
});

//THUNK CREATORS
export const fetchProducts = () => async dispatch => {
  try {
    const response = await axios.get('api/products');
    const products = response.data;
    return dispatch(setProducts(products));
  } catch (error) {
    throw new Error(error);
  }
};

export const checkUser = enteredUser => async dispatch => {
  try {
    const response = await axios.get('api/account');
    const users = response.data;
    const user = users.filter(
      eachUser =>
        eachUser.email === enteredUser.email && eachUser.password === enteredUser.password,
    );
    if (user) {
      return dispatch(setUser(user));
    }
    throw new Error('The email or password you entered is incorrect');
  } catch (error) {
    throw new Error(error);
  }
};
=======
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'

//ACTION TYPES
const SET_USER = 'SET_USER'
const SET_PRODUCTS = 'SET_PRODUCTS'

//ACTION CREATORS
const setUser = user => ({
    type: SET_USER,
    user
})

const setProducts = products => ({
    type: SET_PRODUCTS,
    products
})

//THUNK CREATORS
export const fetchProducts = () => async dispatch => {
    try {
        const response = await axios.get('api/products')
        const products = response.data
        return dispatch(setProducts(products))
    } catch (error) { throw new Error(error) } 
}

export const checkUser = (enteredUser) => async dispatch => {
    try {
        const response = await axios.get('api/account')
        const users = response.data
        const user = users.filter(user => user.email === enteredUser.email && user.password === enteredUser.password)
        if (user) {
            return dispatch(setUser(user))
        } else {
            throw new Error('The email or password you entered is incorrect')
        }
    } catch (error) { throw new Error(error) } 
}
>>>>>>> 26aae8974568fbdd9f70ef38ade8def97a3ca82c

//REDUCERS

const product = (state = {}, action) => {
<<<<<<< HEAD
  switch (action.type) {
    case SET_PRODUCTS:
      return { state: action.products };
    default:
      return state;
  }
};

const user = (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.user };
    default:
      return state;
  }
};

const reducer = combineReducers({
  product,
  user,
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
=======
    switch (action.type) {
        case SET_PRODUCTS:
            return { state: action.products }
        default:
            return state
    }
}

const user = (state = {}, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.user }
        default:
            return state
    }
}

const reducer = combineReducers({
    product,
    user
})

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))

)
>>>>>>> 26aae8974568fbdd9f70ef38ade8def97a3ca82c
