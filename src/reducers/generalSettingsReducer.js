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

  
  export const privacyPolicyListReducer = (state = {privacyPolicy:[] }, action)=>{
      switch(action.type){
          case PRIVACYPOLICY_LIST_REQUEST:
              return{
                loading: true,
                privacyPolicy:[]
              };
              case PRIVACYPOLICY_LIST_SUCCESS:
                  return{
                   loading: false,
                   privacyPolicy: action.payload
                  };
                  case PRIVACYPOLICY_LIST_FAIL:
                      return{
                          loading: false, error: action.payload
                      };
          default:
              return state;
      }
  
  }
  
  export const privacyPolicyCreateReducer = (state = {}, action)=>{
      switch(action.type){
          case PRIVACYPOLICY_ADD_REQUEST:
              return{
                loading: true,
                privacyPolicy:[]
              };
              case PRIVACYPOLICY_ADD_SUCCESS:
                  return{
                   loading: false,
                   success: true,
                   privacyPolicy: action.payload
                  };
                  case PRIVACYPOLICY_ADD_FAIL:
                      return{
                          loading: false, err: action.payload
                      };
          default:
              return state;
      }
  
  }
  
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
    
    export const privacyPolicyDeleteReducer = (state = {privacyPolicy:[] }, action)=>{
      switch(action.type){
          case PRIVACYPOLICY_DELETE_REQUEST:
              return{
                loading: true,
                privacyPolicy:[]
              };
              case PRIVACYPOLICY_DELETE_SUCCESS:
                  return{
                   loading: false,
                   success: true,
                   privacyPolicy: action.payload
                  };
                  case PRIVACYPOLICY_DELETE_FAIL:
                      return{
                          loading: false, error: action.payload
                      };
          default:
              return state;
      }
  
  }
  

  export const emailsListReducer = (state = {emailsList:[] }, action)=>{
    switch(action.type){
        case EMAILLIST_LIST_REQUEST:
            return{
              loading: true,
              emailsList:[]
            };
            case EMAILLIST_LIST_SUCCESS:
                return{
                 loading: false,
                 emailsList: action.payload
                };
                case EMAILLIST_LIST_FAIL:
                    return{
                        loading: false, error: action.payload
                    };
        default:
            return state;
    }

}

export const emailsListDeleteReducer = (state = {emailsList:[] }, action)=>{
  switch(action.type){
      case EMAILLIST_DELETE_REQUEST:
          return{
            loading: true,
            emailsList:[]
          };
          case EMAILLIST_DELETE_SUCCESS:
              return{
               loading: false,
               success: true,
               emailsList: action.payload
              };
              case EMAILLIST_DELETE_FAIL:
                  return{
                      loading: false, error: action.payload
                  };
      default:
          return state;
  }

}