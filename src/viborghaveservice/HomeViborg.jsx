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
    <div className='flex flex-wrap md:flex-nowrap'>
      <div className='md:w-1/2'>
          <h1 className='text-3xl mb-4'>
              <span className="font-semibold">Velkommen til</span> 
              <span className="font-bold" style={{color: "#70AB04" }}> Viborg <br /> Haveservice</span>
          </h1>
            {data && <div dangerouslySetInnerHTML={createMarkup(data.content)} />}
      </div>
      

       { isLoading && <Loader/>} 

       { error && <h2 className='text-2xl text-red-600'>Error ...</h2>}
   
   
     
      <div className='className="flex justify-end space-x-4 p-2'>
        {dataServices && dataServices.slice(0, 2).reverse().map((serviceItem) => (
          
          <div key={serviceItem._id} className="p-2">
            <figure>
                <img src={`http://localhost:5023/images/${serviceItem.image}`} alt={serviceItem.title}  />
           </figure>
            <div>
           <figcaption>
                    <h2 className="text-xl font-semibold mt-2">{serviceItem.title}</h2>
                    <p className="text-sm mt-1">{serviceItem.content}</p>
                </figcaption>
           </div> 
               
        

               <div className='px-6 py-4'>
              <Link to="/adminedit/" className='btn mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Se Alle Ydelser</Link>
              </div> 
          </div>
        ))} 
      </div>
    

     </div>
   


 
  )
}

export default HomeViborg
