import { useEffect, useState } from 'react'
import useRequestData from "../hooks/useRequestData";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";

// import parse from 'react-html-parser'

const HomeViborg = () => {

  const { data, isLoading, error, makeRequest }   = useRequestData();

  const { data:dataServices, isLoading:isLoadingServices,error:errorServices,makeRequest:makeRequestServices }   = useRequestData();

  const [services, setServices] = useState([]);
  const [showAllServices, setShowAllServices] = useState(false);


     useEffect(()=> {
      makeRequest("http://localhost:5023/aboutus");
      
   
     const fetchServices = async () => {
      try {
         const response = await makeRequestServices("http://localhost:5023/services");
         console.log(dataServices);   
        // if (response && response.data) {
        //   setServices(response.data);
        // }
      } catch (error) {
        console.error("Failed to fetch services:", error);
      }
    };

    fetchServices();
    }, []);

  console.log("Services state:", services);

  
     const createMarkup = (htmlString) => {
      return { __html: htmlString };
    };

    const handleSeeAllServicesClick = () => {
    //Skift tilstand for at vise/skjule alle tjenester
    setShowAllServices(!showAllServices);
  };



  

  return (
    
    <div>
      { isLoading && <Loader/>} 

      { error && <h2 className='text-2xl text-red-600'>Error ...</h2>}
      <div className='grid grid-cols-2 justify-center'>
        <div className='py-12'>
          <h1 className='text-4xl mb-10 font-bold text-center'>
              <span className="font-semibold">Velkommen til</span> 
              <span className="font-bold" style={{color: "#70AB04" }}> Viborg <br /> Haveservice</span>
          </h1>
          <div className='max-w-screen-sm mx-auto'>
          {data && <div dangerouslySetInnerHTML={createMarkup(data.content)}  className='pb-10'/>}

          <Link to="/adminedit/" className='btn mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Se Alle Ydelser</Link>

          </div>
         
      </div>
      
      

       
   
   
     
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 m:grid-cols-2 max-w-screen-xl mx-auto py-20'>
        {dataServices && dataServices.slice(0, 2).reverse().map((serviceItem) => (
          
          <div key={serviceItem._id} className="card w-96 bg-base-100 shadow-xl py-7">
            <div className='py-6'>
              <figure>
                <img src={`http://localhost:5023/images/${serviceItem.image}`} alt={serviceItem.title} />
            </figure>
              <div className='card-body max-w-xs mx-auto'>
                <h2 className="card-title">{serviceItem.title}</h2>
                <p className="py-4 text-sm mt-1">{serviceItem.content}</p>
                
            </div> 
           </div>
               
  
         </div>
        ))} 
      </div>
      </div>

     </div>
   


 
  )
}

export default HomeViborg
