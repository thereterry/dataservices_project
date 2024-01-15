import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import useRequestData from "../hooks/useRequestData";
import Error from '../components/Error'
import { Bar } from 'react-chartjs-2';

const EnergyData = () => {

  const { makeRequest, isLoading, data, error } = useRequestData()

  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);

  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);
  

  const [priceArea, setPriceArea] = useState('dk1');



  const handleCalculation = () => {
    makeRequest(`https://api.energidataservice.dk/dataset/Elspotprices?offset=0&start=${startDate}&end=${endDate}&filter=%7B%22PriceArea%22:[%22${priceArea}%22]%7D&sort=HourUTC%20DESC`, 
                "GET", 
                null,
                {
                  fname:startDate,
                  sname: endDate
                }
                );

              

  };

 
  // Graph data setup (ensure this is correctly populated)
  const graphData = {
    labels: data?.records?.map(record => record.time),
    datasets: [
      {
        label: 'Price',
        data: data?.records?.map(record => record.price),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };



  return (
    <div>
      <h1>Energi Data</h1>

      { isLoading && <Loader/> }

      { error && <Error/> }

     
      <div>
        <input onInput={e => setStartDate(e.target.value)} required type='date' className='mb-5 mr-1 input input-border'/>
        <input onInput={e => setEndDate(e.target.value)} required type='date' className='mb-5 mr-1 input input-border'/>
        <select onChange={e => setPriceArea(e.target.value)} className='mb-5 mr-1 input input-border'>
          <option value="dk1">DK1</option>
          <option value="dk2">DK2</option>
        </select>
        <button onClick={handleCalculation} className='mt-4 ml-5 bg-primary-subtle btn'>Lav beregning</button>
      </div>


      {
                data && data.records.map &&
                <div className='card items-center'>
                    <h2 className='mb-6 text-3xl font-bold text-center'>{ data.percentage }</h2>
                    <p>{data.fname}+ {data.sname}</p>
                    <div style={{width:data.percentage + "%"}} className=' bg-red-500 rounded-md h-full'>
                    <p className=' animate-pulse'>{data.result}</p>
                </div>
              
                    {/* <a href={ data.link } target='_blank'>Læs mere {data.link}</a>
                    <button onClick = { ()=> LoveCalculator( )}className='w-40 btn btn-neutral'> Match Mere</button> */}
                </div>
            }

          {     
            data && Array.isArray(data.records) && data.records.length > 0 && 
            <Bar data={graphData} />
          }

    </div>
  )
}

export default EnergyData
