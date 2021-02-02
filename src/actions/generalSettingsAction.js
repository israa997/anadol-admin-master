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
ABOUT_DELETE_FAIL
} from "../constants/generalSettingsConstants";

export const postAboutList =(header_ar, content_ar , header_fr, content_fr, header_tr, content_tr, header_en, content_en) =>async(dispatch, getState)=>{
try{
dispatch({
    type: ABOUT_ADD_REQUEST
})
const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

const {data} = await axios.post("http://192.168.1.34:5000/api/home/addAbout",
{header_ar, content_ar , header_fr, content_fr, header_tr,content_tr, header_en, content_en}
,config);

dispatch({
    type: ABOUT_ADD_SUCCESS,
    payload: data
})

}catch(error){
dispatch(
    {
        type: ABOUT_ADD_FAIL,
        payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });

}

};

export const getAboutList =() =>async(dispatch, getState)=>{
    try{
    dispatch({
        type: ABOUT_LIST_REQUEST
    })
    
    const {data} = await axios.get("http://192.168.1.34:5000/api/home/about");
    
    dispatch({
        type: ABOUT_LIST_SUCCESS,
        payload: data
    })
    
    }catch(error){
    dispatch(
        {
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
      
          const { data } = await axios.put(`/api/Home/editAbout/${id}`,about, config);
      
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
      

      export const deleteAbout =(id) =>async(dispatch, getState)=>{
        try{
        dispatch({
            type: ABOUT_DELETE_REQUEST
        })
        
        const {data} = await axios.delete(`http://192.168.1.34:5000/api/home/deleteAbout/${id}`);
        
        dispatch({
            type: ABOUT_DELETE_SUCCESS,
            payload: data
        })
        
        }catch(error){
        dispatch(
            {
                type: ABOUT_DELETE_FAIL,
                payload:
                error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
            });
        
        }
        
        };