import {createStore} from 'redux';
import burgerReducer from './Burger/burgerReducer';

//passing burger reducer to create store

const store=createStore(burgerReducer);
export default store;