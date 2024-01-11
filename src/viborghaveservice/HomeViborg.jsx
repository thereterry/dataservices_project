import { useEffect, useState } from 'react'
import useRequestData from "../hooks/useRequestData";
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
     <h1>{data && data.title}</h1>

       { isLoading && <Loader/>} 

       { error && <h2>Error ...</h2>}

       {data && <div dangerouslySetInnerHTML={createMarkup(data.content)} />}

          {/* Button to see all services */}
      <button onClick={handleSeeAllServicesClick}>
        {showAllServices ? "Skjul Alle Ydelser" : "Se Alle Ydelser"} 
      </button>

     
      {dataServices && dataServices.slice(0, 2).reverse().map((serviceItem) => (
   
          <div key={serviceItem._id}>
            <figure>
               <img src={`http://localhost:5023/images/${serviceItem.image}`} alt={serviceItem.title} />
          </figure>
            <div>
              <h2>{serviceItem.title}</h2>
              <p>{serviceItem.content}</p>
            </div>
          </div>
        ))} 
     


 
    </div>
  )
}

export default HomeViborg
