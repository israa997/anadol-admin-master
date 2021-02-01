import{
ABOUT_LIST_REQUEST,
ABOUT_LIST_SUCCESS,
ABOUT_LIST_FAIL,
ABOUT_ADD_FAIL,
ABOUT_ADD_REQUEST,
ABOUT_ADD_SUCCESS
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