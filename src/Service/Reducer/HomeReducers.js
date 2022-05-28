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
