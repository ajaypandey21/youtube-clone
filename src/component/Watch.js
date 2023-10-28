import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/NavSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';

function Watch() {
    const [searchParams] = useSearchParams();
    const dispatch  = useDispatch();
    
    useEffect(()=>{
        dispatch(closeMenu())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
  return (
  <div className='flex flex-col ml-10'>
       <div className=' ml-2 p-2'>
          <iframe width="700" height="380" src={`https://www.youtube.com/embed/${searchParams.get("v")}`}  
          title="YouTube video player" 
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen>
          </iframe>
       </div>

      
        <CommentContainer />

      

  </div>

  )
}

export default Watch;