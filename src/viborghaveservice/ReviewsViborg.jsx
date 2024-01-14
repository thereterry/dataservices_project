import React, { useEffect, useState } from 'react'
import useRequestData from '../hooks/useRequestData'
import Loader from '../components/Loader'
import Error from '../components/Error'






const ReviewsViborg = () => {

  const [ testimonials, setTestimonials ] = useState()

  useEffect(()=> {
    makeRequest("http://localhost:5023/reviews");
  },[])

  const { data, isLoading, error, makeRequest }   = useRequestData();

  const backgroundStyle = {
    backgroundImage: `url('/testimonials-bg.jpg')`, // Assuming the image is in the `public` folder
    backgroundSize: 'cover', // This will ensure that your background covers the whole div
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
  };

  return (
    <div style={backgroundStyle}>
      <h1>Kundeudtalelser</h1>
   
      {
            data && data.map(review => 
                
             <div>
              <p>{review.author}</p>
              <p>{review.content}</p>
             </div>
            )
          }
    

      { isLoading && <Loader/>} 

      { error && <h2>Error ...</h2>}

  
    </div>
  )
}

export default ReviewsViborg
