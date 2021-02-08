import {
BANNER_LIST_REQUEST,
BANNER_LIST_SUCCESS,
BANNER_LIST_FAIL, 
BANNER_ADD_REQUEST,
BANNER_ADD_SUCCESS,
BANNER_ADD_FAIL, 
BANNER_UPDATE_REQUEST,
BANNER_UPDATE_SUCCESS,
BANNER_UPDATE_FAIL,
BANNER_DELETE_REQUEST,
BANNER_DELETE_SUCCESS,
BANNER_DELETE_FAIL,
}from "src/constants/BannerConstants.js";

export const BannerListReducer = (state = { banner: [] }, action) => {
  switch (action.type) {
    case BANNER_LIST_REQUEST:
      return {
        loading: true,
        banner: [],
      };
    case BANNER_LIST_SUCCESS:
      return {
        loading: false,
        banner: action.payload,
      };
    case BANNER_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const BannerCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case BANNER_ADD_REQUEST:
      return {
        loading: true,
        banner: [],
      };
    case BANNER_ADD_SUCCESS:
      return {
        loading: false,
        success: true,
        banner: action.payload,
      };
    case BANNER_ADD_FAIL:
      return {
        loading: false,
        err: action.payload,
      };
    default:
      return state;
  }
};

export const updateBannerReducer = (state = {}, action) => {
  switch (action.type) {
    case BANNER_UPDATE_REQUEST:
      return { loading: true };
    case BANNER_UPDATE_SUCCESS:
      return { loading: false, success: true, banner: action.payload };
    case BANNER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const BannerDeleteReducer = (state = { banner: [] }, action) => {
  switch (action.type) {
    case BANNER_DELETE_REQUEST:
      return {
        loading: true,
        banner: [],
      };
    case BANNER_DELETE_SUCCESS:
      return {
        loading: false,
        success: true,
       banner: action.payload,
      };
    case BANNER_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
