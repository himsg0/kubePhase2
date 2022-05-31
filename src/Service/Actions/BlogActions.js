import axios from "axios";
import {
    BLOG_FAIL,
    BLOG_REQUEST,
    BLOG_SUCCESS,

    BLOG_CAT_FAIL,
    BLOG_CAT_REQUEST,
    BLOG_CAT_SUCCESS,

    SINGLEBLOG_FAIL,
    SINGLEBLOG_REQUEST,
    SINGLEBLOG_SUCCESS,
    
    CLEAR_ERRORS
} from "../Constants/BlogConstants";
import React, { useState, useEffect } from 'react';

export const getBlog = (category) => async (dispatch) => {


    try {
        dispatch({ type: BLOG_REQUEST });

        let link = "";
        if(!category){
            link=`http://localhost:8080/api/v1/rl7nuo0GNHFAvhTL/blog/all`;
        }
        else if(category){
            link=`http://localhost:8080/api/v1/rl7nuo0GNHFAvhTL/blog/all?category=${category}`
        }
        
        
        

        const { data } = await axios.get(link);
        
        console.log("data on action",data)
        dispatch({
            type: BLOG_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: BLOG_FAIL,
            payload: error.response.data.message,
        });

    }
};


export const getBlogcategory = () => async (dispatch) => {


    try {
        dispatch({ type: BLOG_CAT_REQUEST });

        let link = "http://localhost:8080/api/v1/rl7nuo0GNHFAvhTL/blog/category";
        
        
        

        const { data } = await axios.get(link);
        
        console.log("datacateory on action",data)
        dispatch({
            type: BLOG_CAT_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: BLOG_CAT_FAIL,
            payload: error.response.data.message,
        });

    }
};


export const getSingleBlog = (title) => async (dispatch) => {


    try {
        dispatch({ type: SINGLEBLOG_REQUEST });

        const link=`http://localhost:8080/api/v1/rl7nuo0GNHFAvhTL/blog/all?title=${title}`;
        const { data } = await axios.get(link);
        
        console.log("data on action",data)
        dispatch({
            type: SINGLEBLOG_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: SINGLEBLOG_FAIL,
            payload: error.response.data.message,
        });

    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};