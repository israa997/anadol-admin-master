import axios from "axios";
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
  SOCIALACCOUNT_ADD_REQUEST,
  SOCIALACCOUNT_ADD_SUCCESS,
  SOCIALACCOUNT_ADD_FAIL,
  SOCIALACCOUNT_LIST_REQUEST,
  SOCIALACCOUNT_LIST_SUCCESS,
  SOCIALACCOUNT_LIST_FAIL,
  SOCIALACCOUNT_UPDATE_REQUEST,
  SOCIALACCOUNT_UPDATE_SUCCESS,
  SOCIALACCOUNT_UPDATE_FAIL,
  SOCIALACCOUNT_DELETE_REQUEST,
  SOCIALACCOUNT_DELETE_SUCCESS,
  SOCIALACCOUNT_DELETE_FAIL,
} from "../constants/generalSettingsConstants";

export const postAboutList = (
  header_ar,
  content_ar,
  header_fr,
  content_fr,
  header_tr,
  content_tr,
  header_en,
  content_en
) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ABOUT_ADD_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://192.168.1.38:5000/api/home/addAbout",
      {
        header_ar,
        content_ar,
        header_fr,
        content_fr,
        header_tr,
        content_tr,
        header_en,
        content_en,
      },
      config
    );

    dispatch({
      type: ABOUT_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ABOUT_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getAboutList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ABOUT_LIST_REQUEST,
    });

    const { data } = await axios.get("http://192.168.1.38:5000/api/home/about");

    dispatch({
      type: ABOUT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ABOUT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateAbout = (id, about) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ABOUT_UPDATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `/api/Home/editAbout/${id}`,
      about,
      config
    );

    dispatch({
      type: ABOUT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ABOUT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteAbout = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ABOUT_DELETE_REQUEST,
    });

    const { data } = await axios.delete(
      `http://192.168.1.38:5000/api/home/deleteAbout/${id}`
    );

    dispatch({
      type: ABOUT_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ABOUT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const postPrivacyPolicyList = (
  header_ar,
  content_ar,
  header_fr,
  content_fr,
  header_tr,
  content_tr,
  header_en,
  content_en
) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRIVACYPOLICY_ADD_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://192.168.1.38:5000/api/home/addPrivacy-Policy",
      {
        header_ar,
        content_ar,
        header_fr,
        content_fr,
        header_tr,
        content_tr,
        header_en,
        content_en,
      },
      config
    );

    dispatch({
      type: PRIVACYPOLICY_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRIVACYPOLICY_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPrivacyPolicyList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRIVACYPOLICY_LIST_REQUEST,
    });

    const { data } = await axios.get(
      "http://192.168.1.38:5000/api/home/privacy-policy"
    );

    dispatch({
      type: PRIVACYPOLICY_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRIVACYPOLICY_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updatePrivacyPolicy = (id, PrivacyPolicy) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: PRIVACYPOLICY_UPDATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `/api/Home/editPrivacy-Policy/${id}`,
      PrivacyPolicy,
      config
    );

    dispatch({
      type: PRIVACYPOLICY_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRIVACYPOLICY_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deletePrivacyPolicy = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRIVACYPOLICY_DELETE_REQUEST,
    });

    const { data } = await axios.delete(
      `http://192.168.1.38:5000/api/home/deletePrivacy-Policy/${id}`
    );

    dispatch({
      type: PRIVACYPOLICY_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRIVACYPOLICY_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getemailsList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: EMAILLIST_LIST_REQUEST,
    });

    const { data } = await axios.get(
      "http://192.168.1.38:5000/api/home/announce-email"
    );

    dispatch({
      type: EMAILLIST_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EMAILLIST_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteEmailList = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: EMAILLIST_DELETE_REQUEST,
    });

    const { data } = await axios.delete(
      `http://192.168.1.38:5000/api/home/deleteAnnounce-email/${id}`
    );

    dispatch({
      type: EMAILLIST_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EMAILLIST_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const postSocialAccountList = (
  phoneNum,
        instagram_URL,
        facebook_URL,
        twitter_URL,
        youtube_URL,
        pintrest_URL,
        tumblr_URL,
        telegram_URL
) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SOCIALACCOUNT_ADD_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://192.168.1.38:5000/api/home/postSocial-accounts",
      {
        phoneNum,
        instagram_URL,
        facebook_URL,
        twitter_URL,
        youtube_URL,
        pintrest_URL,
        tumblr_URL,
        telegram_URL
      },
      config
    );

    dispatch({
      type: SOCIALACCOUNT_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SOCIALACCOUNT_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getSocialAccountList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: SOCIALACCOUNT_LIST_REQUEST,
    });

    const { data } = await axios.get(
      "http://192.168.1.38:5000/api/home/social-accounts"
    );

    dispatch({
      type: SOCIALACCOUNT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SOCIALACCOUNT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateSocialAccount = (id, social) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: SOCIALACCOUNT_UPDATE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(
      `/api/Home/editSocialAccounts/${id}`,
      social,
      config
    );

    dispatch({
      type: SOCIALACCOUNT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SOCIALACCOUNT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteSocialAccount = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SOCIALACCOUNT_DELETE_REQUEST,
    });

    const { data } = await axios.delete(
      `http://192.168.1.38:5000/api/home/deleteSocialAccounts/${id}`
    );

    dispatch({
      type: SOCIALACCOUNT_DELETE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SOCIALACCOUNT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};