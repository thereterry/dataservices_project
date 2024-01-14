import React, { useEffect, useState } from 'react'
import useRequestData from '../hooks/useRequestData';
import Loader from '../components/Loader';
import Error from '../components/Error';
import WeatherCard from './WeatherCard';
import LeafletMap from '../components/LeafletMap';


const Dawa = () => {
    const { makeRequest, isLoading, data, error}   = useRequestData()

    const { makeRequest: makeRequestDAWA, isLoading: isLoadingDAWA, data: dataDAWA, error: errorDAWA } = useRequestData()

    const [ zip, setZip ] = useState( "4000" )

    const [ valid, setValid ] = useState( true )

    useEffect(()=> {
        makeRequest("https://api.openweathermap.org/data/2.5/forecast?zip=" + zip + ",dk&units=metric&appid=5311ce785dd3de9b291799095104c1bf")
      }, [zip])


      useEffect(()=> {
        makeRequestDAWA( "https://api.dataforsyningen.dk/postnumre/autocomplete?q= " +  zip )
      }, [zip])



  return (
    <div>
      <h1>DAWA</h1>

      { isLoading && <Loader/>}

    { error && <h2>Error ...</h2>}

        <input type= "text" list='listPostnr'
        
        value= { zip }
        maxLength= "4"
        onChange = { e => { setZip( e.target.value ); setValid(e.target.checkValidity()) } }
        //checkValidity() tjekker disse to -og returnerer true eller false
        required 
        pattern = "[0-9]{4}"
        placeholder = "tast et postnummer"
        className = "w-full mx-w-xs input input-bordered" />

       

        <datalist>
            {
              dataDAWA?.map(d=>
                <option value={ d.postnummer.nr } key={ d.postnummer.nr }>
                  { d.tekst }
                </option>
                )
            }
          </datalist>
          
          {  data && <WeatherCard data = { data.list[0] } />
         } 

           {
            data &&  <LeafletMap coord = { [ data.city.coord.lat, data.city.coord.lon] }  info = { data.city.name } 
            zoom= "10"
            />
          } 

          
    </div>
  )
}

export default Dawa
