import { SELECTED_CITY, SELECTED_LOCALITY, HEADER_SEARCH,
         LISTCITY_REQUEST, LISTCITY_SUCCESS, LISTCITY_FAIL,
         LISTLOCALITY_REQUEST, LISTLOCALITY_SUCCESS, LISTLOCALITY_FAIL,
         CLEAR_ERRORS } from "../Constants/constants";

export default function cityName(state = { cityData: 'Greater Noida', localityData: '', searchData: '' }, action) {

    switch (action.type) {
        case SELECTED_CITY:
            console.log("Reducer", action)
            return {
                ...state,
                cityData: action.payload
            }
            break;

        case SELECTED_LOCALITY:
            console.log("Reducer", action)
            return {
                ...state,
                localityData: action.payload
            }
            break;
        case HEADER_SEARCH:
            return {
                ...state,
                searchData: action.payload
            }

        default:
            return state
            break;
    }
}

//City Fetching

export const getCityReducer =
    (state = { cityList: [] }, action) => {
        switch (action.type) {
            case LISTCITY_REQUEST:
                return {
                    loading: true,
                    cityList: [],
                };
            case LISTCITY_SUCCESS:

                return {
                    loading: false,
                    cityList: action.payload,
                };
            case LISTCITY_FAIL:
                return {
                    loading: false,
                    error: action.payload,
                };

            case CLEAR_ERRORS:
                return {
                    ...state,
                    error: null,
                };

            default:
                return state;

        }

    };

//Locality
export const getLocalityReducer =
    (state = { locality: [] }, action) => {
        switch (action.type) {
            case LISTLOCALITY_REQUEST:
                return {
                    loading: true,
                    locality: [],
                };
            case LISTLOCALITY_SUCCESS:
                return {
                    loading: false,
                    locality: action.payload.products,

                };
            case LISTLOCALITY_FAIL:
                return {
                    loading: false,
                    error: action.payload,
                };

            case CLEAR_ERRORS:
                return {
                    ...state,
                    error: null,
                };

            default:
                return state;


        }

    };