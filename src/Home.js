import React, { useContext } from 'react'
import { AppContext, UseglobelContext } from './context/AppProvider'

const Home = () => {

     const {hits, nbPages, isLoading, removePost} = useContext(AppContext);
   // const {hits, isLoading} = UseglobelContext();
    //console.log(hits)

    if(isLoading){
        return <h2>Loading...</h2>
         
    }

  return (
    <>  
   
     {hits ? hits.map((curElm)=>{
      const {title, author, objectID, url, num_comments} = curElm;
            return (
             
 <div className='card' key={objectID}>
<h2>{title}</h2>
<p>
  By <span>{author} </span> | <span>{num_comments}</span> Comments
</p>
<div className='card-button'>
  <a href={url} target="_blank">Read More</a>
  <a href='!#' onClick={() => removePost(objectID)}>Remove</a>
</div>
 </div>
            

            )
            
        }) : <h2>Loading..</h2>

     }

  </>   
  )

}

export default Home