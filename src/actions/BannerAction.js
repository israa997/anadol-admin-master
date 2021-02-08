import axios from "axios";
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
    

export const postBannerList = (
    banner_text_AR,banner_text_EN, banner_text_FR,banner_text_TR
  ) => async (dispatch, getState) => {
    try {
      dispatch({
        type: BANNER_ADD_REQUEST,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.post(
        "http://192.168.1.38:5000/api/home/addBanner",
        {
            banner_text_AR,banner_text_EN, banner_text_FR,banner_text_TR
        },
        config
      );
  
      dispatch({
        type: BANNER_ADD_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BANNER_ADD_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const getBannerList = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: BANNER_LIST_REQUEST,
      });
  
      const { data } = await axios.get(
        "http://192.168.1.38:5000/api/home/banner"
      );
  
      dispatch({
        type: BANNER_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BANNER_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const updateBanner = (id, banner) => async (
    dispatch,
    getState
  ) => {
    try {
      dispatch({
        type: BANNER_UPDATE_REQUEST,
      });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const { data } = await axios.put(
        `/api/Home/editBanner/${id}`,
        banner,
        config
      );
  
      dispatch({
        type: BANNER_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BANNER_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  
  export const deleteBanner = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: BANNER_DELETE_REQUEST,
      });
  
      const { data } = await axios.delete(
        `http://192.168.1.38:5000/api/home/deleteBanner/${id}`
      );
  
      dispatch({
        type: BANNER_DELETE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BANNER_DELETE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };