import axios from "axios";
import {
    ALL_OFFER_REQUEST,
    ALL_OFFER_SUCCESS,
    ALL_OFFER_FAIL,

    LISTING_CAT_REQUEST,
    LISTING_CAT_SUCCESS,
    LISTING_CAT_FAIL,

    LISTING_SUBCAT_REQUEST,
    LISTING_SUBCAT_SUCCESS,
    LISTING_SUBCAT_FAIL,
    
    CLEAR_ERRORS
} from "../Constants/OfferPageConstants";

export const offersReducer =
    (state = { offers: [] }, action) => {
        switch (action.type) {
            case ALL_OFFER_REQUEST:
                return {
                    loading: true,
                    offers: [],
                };
            case ALL_OFFER_SUCCESS:
                console.log("Offer Reducer","hello")
                return {
                    loading: false,
                    offers: action.payload.products,
                };
                
            case ALL_OFFER_FAIL:
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