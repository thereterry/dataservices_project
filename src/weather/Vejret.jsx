import React, { useEffect, useState } from 'react'
import useRequestData from '../hooks/useRequestData';
import Loader from '../components/Loader';
import Error from '../components/Error';

const Vejret = () => {
  const { data, isLoading, error, makeRequest }   = useRequestData()

  const [ zip, setZip ] = useState()

  return (
    <div>
      
    </div>
  )
}

export default Vejret

