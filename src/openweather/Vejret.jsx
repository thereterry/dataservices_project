import React, { useEffect } from 'react'
import useRequestData from '../hooks/useRequestData';
import Loader from '../components/Loader';
import Error from '../components/Error';
import WeatherCard from './WeatherCard'

const Vejret = () => {
  const { data, isLoading, error, makeRequest }   = useRequestData()

  const [ zip, setZip ] = useState( "8000" )
  const [ valid, setValid ] = useState( true )

  
  useEffect(()=> {
    makeRequest("https://api.openweathermap.org/data/2.5/forecast?zip=" + zip + ",dk&units=metric&appid=5311ce785dd3de9b291799095104c1bf")
  }, [zip])

  return (
    <div>
      <h1>Vejret-</h1>

      { isLoading && <Loader/>}

      { error && <h2>Error ...</h2>}

      <input type= "text"
        
        value= { zip }
        maxLength= "4"
        onChange = { e => { setZip( e.target.value ); setValid( e.target.checkValidity()) } }
        //checkValidity() tjekker disse to -og returnerer true eller false
        required = "[0-9]{4}"
        pattern = "[0-9]{4}"
        placeholder = "tast et postnummer"
        classname = "w-full mx-w-xs input input-bordered" />

     {  data && <WeatherCard data = { data.list[0] } />
          } 
    </div>
  )
}

export default Vejret

