import{
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
} from "src/constants/generalSettingsConstants.js"


export const aboutListReducer = (state = {about:[] }, action)=>{
    switch(action.type){
        case ABOUT_LIST_REQUEST:
            return{
              loading: true,
              about:[]
            };
            case ABOUT_LIST_SUCCESS:
                return{
                 loading: false,
                 about: action.payload
                };
                case ABOUT_LIST_FAIL:
                    return{
                        loading: false, error: action.payload
                    };
        default:
            return state;
    }

}

export const aboutCreateReducer = (state = {}, action)=>{
    switch(action.type){
        case ABOUT_ADD_REQUEST:
            return{
              loading: true,
              aboutAdd:[]
            };
            case ABOUT_ADD_SUCCESS:
                return{
                 loading: false,
                 success: true,
                 aboutAdd: action.payload
                };
                case ABOUT_ADD_FAIL:
                    return{
                        loading: false, err: action.payload
                    };
        default:
            return state;
    }

}

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
  
  export const aboutDeleteReducer = (state = {about:[] }, action)=>{
    switch(action.type){
        case ABOUT_DELETE_REQUEST:
            return{
              loading: true,
              about:[]
            };
            case ABOUT_DELETE_SUCCESS:
                return{
                 loading: false,
                 success: true,
                 about: action.payload
                };
                case ABOUT_DELETE_FAIL:
                    return{
                        loading: false, error: action.payload
                    };
        default:
            return state;
    }

}