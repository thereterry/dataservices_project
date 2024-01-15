import React, { useEffect, useState } from 'react'
import useRequestData from '../hooks/useRequestData'
import Loader from '../components/Loader'
import Error from '../components/Error'


const ReviewsViborg = () => {

  const [ testimonials, setTestimonials ] = useState()


  const { data, isLoading, error, makeRequest }   = useRequestData();

  useEffect(()=> {
    makeRequest("http://localhost:5023/reviews");
  },[])



  const createMarkup = (htmlString) => {
    return { __html: htmlString };
  };

  const backgroundStyle = {
    backgroundImage: `url('/testimonials-bg.jpg')`, // Assuming the image is in the `public` folder
    backgroundSize: 'cover', // This will ensure that your background covers the whole div
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
  };

  return (
    <div>
      <h1  className='text-4xl mb-10 font-semi-bold text-center py-40'>Kundeudtalelser</h1>
    <div>
      <figure>
        <a href="/">
          <img src={"http://localhost:5023/images"}alt="" />
        </a>
      </figure>
    </div>
      

   
      {
            data && data.map(review => 
                
             <div className='mySlides fade'>
              <p>{review.author}</p>
              <p>{review.content}</p>
             </div>
            )
          }
    

      { isLoading && <Loader/>} 

      { error && <h2>Error ...</h2>}


      {data && <div dangerouslySetInnerHTML={createMarkup(data.content)} />}

  
    </div>
  )
}

export default ReviewsViborg
