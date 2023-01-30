import { Action } from '@remix-run/router';
import React, { createContext, useContext, useEffect } from 'react'
import { useReducer } from 'react';
import axios from 'axios';
import reducer from "../reducer/AppReduser";


const AppContext = createContext();
const API = "https://hn.algolia.com/api/v1/search?";

const initialState ={
  isLoading:true,
  query :"HTML",
  page:0,
  nbPages:0,
  hits:[],
}

const AppProvider = ({children}) => {
 
   const [state, dispatch] = useReducer(reducer, initialState);

   const getApiData = async (url)=>{
    dispatch({type : "ISLOADING"})
    try{
    //   const res = await fetch(url);
    // const data = res.json();

    const res = await axios.get(url);
    const resdata = await res.data;

    //console.log(resdata)
    dispatch({type : "GET_STORY", 
    payload:{
       hits:resdata.hits,
       nbPages:resdata.nbPages
      },
    })
     
    } catch(error){
      console.log(error)
    }
   }

   const removePost =(post_ID)=>{
    dispatch({type : "REMOVE_POST", payload: post_ID})
   }
 
const Search_post = (search_qury)=>{
dispatch({type : "SEARCH_POST", payload: search_qury})  
}

const prevPage = ()=>{
dispatch({type : "PREV_PAGE"})
}

const nextPage = ()=>{
  dispatch({type : "NEXT_PAGE"})
  }
  

   useEffect (()=>{
    getApiData(`${API}query=${state.query}&page=${state.page}`);
   }, [state.query, state.page])

    return (
     <>
     <AppContext.Provider value={ {...state, getApiData, removePost, Search_post, nextPage, prevPage}}>

      {children}
     </AppContext.Provider>
     </>
  )
}

const UseglobelContext = ()=>{
  return useContext(AppContext);
}

export default AppProvider;

export {AppContext, UseglobelContext};