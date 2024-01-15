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
    backgroundImage: `url('/testimonials-bg.jpg')`, 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center'
  };

  return (
    <div>
      <h1 className='text-4xl mb-10 font-semi-bold text-center py-40'>Kundeudtalelser</h1>
    <div>
      <figure>
        <a href="/">
          <img src={"http://localhost:5023/images/" }alt="" />
        </a>
      </figure>
    </div>
      

   
      {
            data && data.map(review => 
                
             <div>
              <div className='text-s mb-10 font-semi-bold text-center' dangerouslySetInnerHTML={createMarkup(review.content)} />
              <p className='text-s mb-10 font-semi-bold text-center'>-{review.author}</p>
           
             </div>
            )
          }
    

      { isLoading && <Loader/>} 

      { error && <h2>Error ...</h2>}


      {data && <div dangerouslySetInnerHTML={createMarkup(data.content)}  className='pb-10'/>}

  
    </div>
  )
}

export default ReviewsViborg
