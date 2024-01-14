import React from 'react'
import { FaArrowDownLong, FaRotate } from 'react-icons/fa6'


const WeatherCard = (data) => {
    data = data.data;
    console.log(data);
    // console.log(data.weather[0]);
    // console.log(data.weather[0].icon);
    return (
        <article className='w-1/2 mt-10 shadow-xl card bg-base-100'>
         <div className='card-body'>
           {/* <h2 className='my-4 text-2xl font-bold'> Vejret for { data.name }</h2> */}
           <figure>
             <img src= { "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png" } />
           </figure>
           
           <ul className='ml-5 list-disc divide-y divide-gray-200'>
             <li className='py-4'>Temperature: { Math.round( data.main.temp ) }&deg;C</li>
             <li className='py-4'>Vindhastighed: { Math.round(data.wind.speed) }m/sek.</li>
             <li className='py-4'>Vindretning: {data.wind.deg}
             <FaArrowDownLong style={ { transform: "rotate(" + data.wind.deg + "deg)" } } />
             </li>
             <li className='py-4'>Solen står op kl. { new Date( data.sys.sunrise * 1000 ).toLocaleString([], {hour:'2-digit', minute: '2-digit'}) }</li>
             <li className='py-4'>Solen går ned kl. { new Date( data.sys.sunrise * 1000 ).toLocaleString([], {hour:'2-digit', minute: '2-digit'}) }</li>
           </ul>
         </div>
        </article>
       )
}

export default WeatherCard
