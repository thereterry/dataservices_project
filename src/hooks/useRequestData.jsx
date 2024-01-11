import { useState } from "react";
import axios from "axios"; //import axios if there is a specific url


const useRequestData = () => {
  //condition/betingelser
  const [isLoading, setisLoading] = useState(false);

  const [data, setData] = useState(null);

  const [error, setError] = useState(null);

    //Kalder API med GET, POST, PUT, PATCH
    

  //async function
  const makeRequest = async (apiurl, method = "GET", bodydata = null, headers = null, params = null) => {

    setisLoading(true);

    //Kalder API /Call the API

    setTimeout(async () => {

      try {
        let response 
        switch (method) {
          case "GET":
           response = await axios.get(apiurl, { headers: headers, body : null, params: params} );
            break;   

            case "POST":
              response = await axios.post(apiurl, bodydata, { headers,params })
              break;

              case "PUT":
                response = await axios.put(apiurl, bodydata,  { headers,params })
                break

                case "PATCH":
                  response = await axios.patch(apiurl, bodydata, { headers,params } )
                  break

                  case "DELETE":
                    response = await axios.delete(apiurl, { headers,params })
                    break

                    default: 
                    throw new Error ("Invalid method- GET, POST ,PATCH ,DELETE  was expected")
        }
  
        if (response.data) {
          setData(response.data);
          setError(null);

        } else {
          throw new Error("Tomt response/ingen data");
        }

      } catch (error) {
        console.log(error);
        setError("Der er opstået en fejl:" + error.message);
        setData(null);

      } finally {
        setisLoading(false);
      }

    }, 5000);
  };

  return { data, isLoading, error, makeRequest };
};

export default useRequestData;
