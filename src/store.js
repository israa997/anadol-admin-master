import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productCreateReducer,
  productDetailsReducer,
  productListReducer,
  productUpdateReducer,
} from "./reducers/productsReducers";
import {
  userDeleteReducer,
  userDetailsReducer,
  userListReducer,
  userLoginReducer,
  userUpdateReducer,
} from "./reducers/userReducer";
import {
  aboutCreateReducer,
  aboutDeleteReducer,
  aboutListReducer,
  privacyPolicyListReducer,
  emailsListReducer,
  emailsListDeleteReducer,
  updateAboutReducer,
  privacyPolicyCreateReducer,
  updatePrivacyPolicyReducer,
  privacyPolicyDeleteReducer,
  socialAccountListReducer,
  SocialAccountDeleteReducer,
  updateSocialAccountReducer,
  socialAccountCreateReducer,
  CurrencyDeleteReducer,
  updateCurrencyReducer,
  CurrencyCreateReducer,
  CurrencyListReducer,
  countryListReducer,
  updateCountryReducer,
  countryDeleteReducer,
  countryCreateReducer,
} from "./reducers/generalSettingsReducer";
import {
  BannerDeleteReducer,
  updateBannerReducer,
  BannerListReducer,
  BannerCreateReducer,
} from "./reducers/BannerReducer";
const initialState = {
  sidebarShow: "responsive",
};

const changeStateReducer = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case "set":
      return { ...state, ...rest };
    default:
      return state;
  }
};

const reducer = combineReducers({
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
  aboutUpdate: updateAboutReducer,
  aboutDelete: aboutDeleteReducer,

  privacyPolicyList: privacyPolicyListReducer,
  privacyPolicyCreate: privacyPolicyCreateReducer,
  privacyPolicyUpdate: updatePrivacyPolicyReducer,
  privacyPolicyDelete: privacyPolicyDeleteReducer,

  emailsLists: emailsListReducer,
  emailsListDelete: emailsListDeleteReducer,

  socialList: socialAccountListReducer,
  socialCreate: socialAccountCreateReducer,
  socialUpdate: updateSocialAccountReducer,
  socialDelete: SocialAccountDeleteReducer,

  bannerList: BannerListReducer,
  bannerCreate: BannerCreateReducer,
  bannerUpdate: updateBannerReducer,
  bannerDelete: BannerDeleteReducer,

  currencyList: CurrencyListReducer,
  currencyCreate: CurrencyCreateReducer,
  currencyUpdate: updateCurrencyReducer,
  currencyDelete: CurrencyDeleteReducer,


  countryList: countryListReducer,
  countryCreate: countryCreateReducer,
  countryUpdate: updateCountryReducer,
  countryDelete: countryDeleteReducer,

  changeState: changeStateReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  // changeState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
