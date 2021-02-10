import {
  ABOUT_LIST_REQUEST,
  ABOUT_LIST_SUCCESS,
  ABOUT_LIST_FAIL,
  ABOUT_ADD_FAIL,
  ABOUT_ADD_REQUEST,
  ABOUT_ADD_SUCCESS,
  ABOUT_UPDATE_REQUEST,
  ABOUT_UPDATE_FAIL,
  ABOUT_UPDATE_SUCCESS,
  ABOUT_DELETE_REQUEST,
  ABOUT_DELETE_SUCCESS,
  ABOUT_DELETE_FAIL,
  PRIVACYPOLICY_LIST_REQUEST,
  PRIVACYPOLICY_LIST_SUCCESS,
  PRIVACYPOLICY_LIST_FAIL,
  PRIVACYPOLICY_ADD_FAIL,
  PRIVACYPOLICY_ADD_REQUEST,
  PRIVACYPOLICY_ADD_SUCCESS,
  PRIVACYPOLICY_UPDATE_REQUEST,
  PRIVACYPOLICY_UPDATE_FAIL,
  PRIVACYPOLICY_UPDATE_SUCCESS,
  PRIVACYPOLICY_DELETE_REQUEST,
  PRIVACYPOLICY_DELETE_SUCCESS,
  PRIVACYPOLICY_DELETE_FAIL,
  EMAILLIST_LIST_REQUEST,
  EMAILLIST_LIST_SUCCESS,
  EMAILLIST_LIST_FAIL,
  EMAILLIST_DELETE_REQUEST,
  EMAILLIST_DELETE_SUCCESS,
  EMAILLIST_DELETE_FAIL,
  SOCIALACCOUNT_LIST_REQUEST,
  SOCIALACCOUNT_LIST_SUCCESS,
  SOCIALACCOUNT_LIST_FAIL,
  SOCIALACCOUNT_ADD_FAIL,
  SOCIALACCOUNT_ADD_REQUEST,
  SOCIALACCOUNT_ADD_SUCCESS,
  SOCIALACCOUNT_UPDATE_REQUEST,
  SOCIALACCOUNT_UPDATE_FAIL,
  SOCIALACCOUNT_UPDATE_SUCCESS,
  SOCIALACCOUNT_DELETE_REQUEST,
  SOCIALACCOUNT_DELETE_SUCCESS,
  SOCIALACCOUNT_DELETE_FAIL,
  CURRENCY_DELETE_FAIL,
  CURRENCY_DELETE_SUCCESS,
  CURRENCY_DELETE_REQUEST,
  CURRENCY_UPDATE_FAIL,
  CURRENCY_UPDATE_SUCCESS,
  CURRENCY_UPDATE_REQUEST,
  CURRENCY_ADD_FAIL,
  CURRENCY_ADD_SUCCESS,
  CURRENCY_ADD_REQUEST,
  CURRENCY_LIST_FAIL,
  CURRENCY_LIST_SUCCESS,
  CURRENCY_LIST_REQUEST,
  COUNTRY_LIST_REQUEST,
  COUNTRY_LIST_SUCCESS,
  COUNTRY_LIST_FAIL,
  COUNTRY_DELETE_FAIL,
  COUNTRY_DELETE_SUCCESS,
  COUNTRY_DELETE_REQUEST,
  COUNTRY_UPDATE_FAIL,
  COUNTRY_UPDATE_SUCCESS,
  COUNTRY_UPDATE_REQUEST,
  COUNTRY_ADD_FAIL,
  COUNTRY_ADD_SUCCESS,
  COUNTRY_ADD_REQUEST,
} from "src/constants/generalSettingsConstants.js";

export const aboutListReducer = (state = { about: [] }, action) => {
  switch (action.type) {
    case ABOUT_LIST_REQUEST:
      return {
        loading: true,
        about: [],
      };
    case ABOUT_LIST_SUCCESS:
      return {
        loading: false,
        about: action.payload,
      };
    case ABOUT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const aboutCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ABOUT_ADD_REQUEST:
      return {
        loading: true,
        aboutAdd: [],
      };
    case ABOUT_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
        aboutAdd: action.payload,
      };
    case ABOUT_ADD_FAIL:
      return {
        loading: false,
        err: action.payload,
      };
    default:
      return state;
  }
};

export const updateAboutReducer = (state = {}, action) => {
  switch (action.type) {
    case ABOUT_UPDATE_REQUEST:
      return { loading: true };
    case ABOUT_UPDATE_SUCCESS:
      return { loading: false, success: true, about: action.payload };
    case ABOUT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const aboutDeleteReducer = (state = { about: [] }, action) => {
  switch (action.type) {
    case ABOUT_DELETE_REQUEST:
      return {
        loading: true,
        about: [],
      };
    case ABOUT_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        about: action.payload,
      };
    case ABOUT_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const privacyPolicyListReducer = (
  state = { privacyPolicy: [] },
  action
) => {
  switch (action.type) {
    case PRIVACYPOLICY_LIST_REQUEST:
      return {
        loading: true,
        privacyPolicy: [],
      };
    case PRIVACYPOLICY_LIST_SUCCESS:
      return {
        loading: false,
        privacyPolicy: action.payload,
      };
    case PRIVACYPOLICY_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const privacyPolicyCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRIVACYPOLICY_ADD_REQUEST:
      return {
        loading: true,
        privacyPolicy: [],
      };
    case PRIVACYPOLICY_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
        privacyPolicy: action.payload,
      };
    case PRIVACYPOLICY_ADD_FAIL:
      return {
        loading: false,
        err: action.payload,
      };
    default:
      return state;
  }
};

export const updatePrivacyPolicyReducer = (state = {}, action) => {
  switch (action.type) {
    case PRIVACYPOLICY_UPDATE_REQUEST:
      return { loading: true };
    case PRIVACYPOLICY_UPDATE_SUCCESS:
      return { loading: false, success: true, privacyPolicy: action.payload };
    case PRIVACYPOLICY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const privacyPolicyDeleteReducer = (
  state = { privacyPolicy: [] },
  action
) => {
  switch (action.type) {
    case PRIVACYPOLICY_DELETE_REQUEST:
      return {
        loading: true,
        privacyPolicy: [],
      };
    case PRIVACYPOLICY_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        privacyPolicy: action.payload,
      };
    case PRIVACYPOLICY_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const emailsListReducer = (state = { emailsList: [] }, action) => {
  switch (action.type) {
    case EMAILLIST_LIST_REQUEST:
      return {
        loading: true,
        emailsList: [],
      };
    case EMAILLIST_LIST_SUCCESS:
      return {
        loading: false,
        emailsList: action.payload,
      };
    case EMAILLIST_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const emailsListDeleteReducer = (state = { emailsList: [] }, action) => {
  switch (action.type) {
    case EMAILLIST_DELETE_REQUEST:
      return {
        loading: true,
        emailsList: [],
      };
    case EMAILLIST_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        emailsList: action.payload,
      };
    case EMAILLIST_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const socialAccountListReducer = (state = { social: [] }, action) => {
  switch (action.type) {
    case SOCIALACCOUNT_LIST_REQUEST:
      return {
        loading: true,
        social: [],
      };
    case SOCIALACCOUNT_LIST_SUCCESS:
      return {
        loading: false,
        social: action.payload,
      };
    case SOCIALACCOUNT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const socialAccountCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case SOCIALACCOUNT_ADD_REQUEST:
      return {
        loading: true,
        social: [],
      };
    case SOCIALACCOUNT_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
        social: action.payload,
      };
    case SOCIALACCOUNT_ADD_FAIL:
      return {
        loading: false,
        err: action.payload,
      };
    default:
      return state;
  }
};

export const updateSocialAccountReducer = (state = {}, action) => {
  switch (action.type) {
    case SOCIALACCOUNT_UPDATE_REQUEST:
      return { loading: true };
    case SOCIALACCOUNT_UPDATE_SUCCESS:
      return { loading: false, success: true, social: action.payload };
    case SOCIALACCOUNT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const SocialAccountDeleteReducer = (state = { social: [] }, action) => {
  switch (action.type) {
    case SOCIALACCOUNT_DELETE_REQUEST:
      return {
        loading: true,
        social: [],
      };
    case SOCIALACCOUNT_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        social: action.payload,
      };
    case SOCIALACCOUNT_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const CurrencyListReducer = (state = { currency: [] }, action) => {
  switch (action.type) {
    case CURRENCY_LIST_REQUEST:
      return {
        loading: true,
        currency: [],
      };
    case CURRENCY_LIST_SUCCESS:
      return {
        loading: false,
        currency: action.payload,
      };
    case CURRENCY_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const CurrencyCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CURRENCY_ADD_REQUEST:
      return {
        loading: true,
        currency: [],
      };
    case CURRENCY_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
        currency: action.payload,
      };
    case CURRENCY_ADD_FAIL:
      return {
        loading: false,
        err: action.payload,
      };
    default:
      return state;
  }
};

export const updateCurrencyReducer = (state = {}, action) => {
  switch (action.type) {
    case CURRENCY_UPDATE_REQUEST:
      return { loading: true };
    case CURRENCY_UPDATE_SUCCESS:
      return { loading: false, success: true, currency: action.payload };
    case CURRENCY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const CurrencyDeleteReducer = (state = { currency: [] }, action) => {
  switch (action.type) {
    case CURRENCY_DELETE_REQUEST:
      return {
        loading: true,
        currency: [],
      };
    case CURRENCY_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        currency: action.payload,
      };
    case CURRENCY_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};


export const countryListReducer = (state = { country: [] }, action) => {
  switch (action.type) {
    case COUNTRY_LIST_REQUEST:
      return {
        loading: true,
        country: [],
      };
    case COUNTRY_LIST_SUCCESS:
      return {
        loading: false,
        country: action.payload,
      };
    case COUNTRY_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const countryCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case COUNTRY_ADD_REQUEST:
      return {
        loading: true,
        country: [],
      };
    case COUNTRY_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
        country: action.payload,
      };
    case COUNTRY_ADD_FAIL:
      return {
        loading: false,
        err: action.payload,
      };
    default:
      return state;
  }
};

export const updateCountryReducer = (state = {}, action) => {
  switch (action.type) {
    case COUNTRY_UPDATE_REQUEST:
      return { loading: true };
    case COUNTRY_UPDATE_SUCCESS:
      return { loading: false, success: true, Country: action.payload };
    case COUNTRY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const countryDeleteReducer = (state = { country: [] }, action) => {
  switch (action.type) {
    case COUNTRY_DELETE_REQUEST:
      return {
        loading: true,
        country: [],
      };
    case COUNTRY_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
        country: action.payload,
      };
    case COUNTRY_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
