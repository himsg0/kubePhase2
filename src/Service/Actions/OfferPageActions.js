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
import React, { useState, useEffect } from 'react';

export const getOffers =(city,locality)=>async(dispatch)=>{

    try {
        dispatch({type: ALL_OFFER_REQUEST});

        let link = ``;
        if(city && !locality)
        {
            link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}&featured=true`;
        }
        else if(city && locality)
        {
            link=`https://kubeshop.in:8080/api/v1/rl7nuo0GNHFAvhTL/stores/all?city=${city}&locality=${locality}&featured=true`;
        } 

    
        const {data} =await axios.get(link);
        console.log("offer action props",data);
        
        dispatch({
            type:ALL_OFFER_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        dispatch({
            type: ALL_OFFER_FAIL,
            payload: error.response.data.message,
        });
        
    }
    };



export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};