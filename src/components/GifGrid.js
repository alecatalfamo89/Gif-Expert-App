import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifts';

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {


const {data:images,loading} = useFetchGifs(category);

// , { useState,useEffect }

  
  return (
    <>
    <h3 className='text animate__fadeIn'>{category}</h3>  
      {loading && <p className='wep animate__flash'>Loading...</p>}
    <div className='card-grid'>       
        
          {
            images.map(img => (
              
            <GifGridItem
             key={img.id}
             {...img}             
            />
            
            ))
            }
           

    </div>
    </>
  )  
}
