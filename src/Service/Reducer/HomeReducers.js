import {
    CLEAR_ERROR,
    LOCALITY_BANNER_FAIL,
    LOCALITY_BANNER_REQUEST,
    LOCALITY_BANNER_SUCCESS,
    ALL_CAT_FAIL,
    ALL_CAT_REQUEST,
    ALL_CAT_SUCCESS,
    DAY_OFFER_FAIL,
    DAY_OFFER_REQUEST,
    DAY_OFFER_SUCCESS,
    HOME_STORE_FAIL,
    HOME_STORE_REQUEST,
    HOME_STORE_SUCCESS,
    HOME_NEWSTORE_FAIL,
    HOME_NEWSTORE_REQUEST,
    HOME_NEWSTORE_SUCCESS,
    HBLOG_FAIL,
    HBLOG_REQUEST,
    HBLOG_SUCCESS
} from "../Constants/HomeConstant";

//Locality Banner Fetching
export const localityBannerReducer = (state = { banner: "" }, action) => {

    switch (action.type) {
        case LOCALITY_BANNER_REQUEST:
            return {
                loading: true,
                banner: ""
            }
            break;
        case LOCALITY_BANNER_SUCCESS:
            return {
                loading: false,
                banner: action.payload
            }
            break;
        case LOCALITY_BANNER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
            break;
        case CLEAR_ERROR:
            return {
                ...state,
                error: null
            }
            break;


        default:
            return state
    }

}

//Category Fetching
export const catReducer =
    (state = { cats: [] }, action) => {
        switch (action.type) {
            case ALL_CAT_REQUEST:
                return {
                    loading: true,
                    cats: [],
                };
            case ALL_CAT_SUCCESS:
                return {
                    loading: false,
                    cats: action.payload.products,

                };
            case ALL_CAT_FAIL:
                return {
                    loading: false,
                    error: action.payload,
                };

            case CLEAR_ERROR:
                return {
                    ...state,
                    error: null,
                };

            default:
                return state;

        }

    };

export const offerReducer =
    (state = { offers: [] }, action) => {
        switch (action.type) {
            case DAY_OFFER_REQUEST:
                return {
                    loading: true,
                    offers: [],
                };
            case DAY_OFFER_SUCCESS:
                console.log("Offer Reducer","hello")
                return {
                    loading: false,
                    offers: action.payload.products,

                };
            case DAY_OFFER_FAIL:
                return {
                    loading: false,
                    error: action.payload,
                };

            case CLEAR_ERROR:
                return {
                    ...state,
                    error: null,
                };

            default:
                return state;

        }

    };

// Home Store Reducers

export const storeHReducer =
    (state = { stores: [] }, action) => {
        switch (action.type) {
            case HOME_STORE_REQUEST:
                return {
                    loading: true,
                    stores: [],
                };
            case HOME_STORE_SUCCESS:
                return {
                    loading: false,
                    stores: action.payload.products,

                };
            case HOME_STORE_FAIL:
                return {
                    loading: false,
                    error: action.payload,
                };

            case CLEAR_ERROR:
                return {
                    ...state,
                    error: null,
                };

            default:
                return state;

        }

    };


  // New Listing Reducers
  
  // Home NewStore Reducers

export const storeHNewReducer =
(state = { newstores: [] }, action) => {
    switch (action.type) {
        case HOME_NEWSTORE_REQUEST:
            return {
                loading: true,
                newstores: [],
            };
        case HOME_NEWSTORE_SUCCESS:
            return {
                loading: false,
                newstores: action.payload.brandStore,

            };
        case HOME_NEWSTORE_FAIL:
            return {
                loading: false,
                error: action.payload,
            };

        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            };

        default:
            return state;

    }

};

// Home Blog Reducers

export const blogHReducer =
    (state = { post: [] }, action) => {
        switch (action.type) {
            case HBLOG_REQUEST:
                return {
                    loading: true,
                    post: [],
                };
            case HBLOG_SUCCESS:
               
                return {
                    loading: false,
                    post: action.payload.Blogpost,

                };
            case HBLOG_FAIL:
                return {
                    loading: false,
                    error: action.payload,
                };

            case CLEAR_ERROR:
                return {
                    ...state,
                    error: null,
                };

            default:
                return state;

        }

    };

