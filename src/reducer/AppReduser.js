const AppReduser = (state, action) =>{ 

switch(action.type){

    case "ISLOADING":
       return{
        ...state,
        isLoading:true,
       };

    case "GET_STORY" :
    return{
        ...state,
        isLoading:false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages
    };
case "REMOVE_POST" :
    return{
        ...state,
        hits: state.hits.filter((curElm) => curElm.objectID !== action.payload   
         ),
    };
  case "SEARCH_POST":
    return{
        ...state,
        query:action.payload,
    }  
   case "PREV_PAGE":
    let pagesNo = state.page;
    if(pagesNo <= 0){
        pagesNo = 0
    } else {
        pagesNo = pagesNo - 1;
    }
   return{
    ...state,
    page: pagesNo, 
   }

   case "NEXT_PAGE":
   
   let pageNo = state.page  + 1 ;

   if(pageNo >= state.nbPages){
    pageNo =  0 ;
   }  
   return{
    ...state,
    page: pageNo, 
   }

}
return state ;

  
}

export default AppReduser;