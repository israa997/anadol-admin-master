import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productCreateReducer, productDetailsReducer, productListReducer, productUpdateReducer } from "./reducers/productsReducers";
import { userDeleteReducer, userDetailsReducer, userListReducer, userLoginReducer, userUpdateReducer } from "./reducers/userReducer";
import {aboutCreateReducer, aboutListReducer} from "./reducers/generalSettingsReducer";
const initialState = {
  sidebarShow: 'responsive'
}

const changeStateReducer  = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return {...state, ...rest }
    default:
      return state
  }
}

const reducer = 
combineReducers({

  userLogin: userLoginReducer,
  userDetail: userDetailsReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,



  productList: productListReducer,
  productCreate: productCreateReducer,
  productDetail: productDetailsReducer,
  productUpdate: productUpdateReducer,
  


 aboutList: aboutListReducer,
 aboutCreate: aboutCreateReducer,

  changeState: changeStateReducer 
});


const middleware = [thunk];


const store = createStore(
  reducer,
  // changeState,
  composeWithDevTools(applyMiddleware(...middleware))
  )
export default store