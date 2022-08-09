import axios from "axios";
import {
    USER_REQUEST_FAILED,
    USER_REQUEST,
    USER_REQUEST_SUCCESS,
    
  } 
  from "./type";
  import { useState } from "react";

  
 
  
    
  export const Fetchnews = (FormData)=> async (dispatch )=>{
    
    dispatch({
type:USER_REQUEST                                                                                
    })

try {
   const res = await axios.get (`https://newsapi.org/v2/top-headlines?country=in&apiKey=49d8cf4bf5b04baead27753fe871d86c`)
//    console.log(res.data.articles)
  //  setNews(res.articles)
   
   dispatch({
    type:USER_REQUEST_SUCCESS,
    payload:res
   })

} catch (error) {
    console.log(error)
    dispatch({
        type: USER_REQUEST_FAILED,
    })
}
}
