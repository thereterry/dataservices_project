import React, { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'Leaflet/dist/leaflet.css'

import pin from '../assets/pin.png'

let DefaultIcon = L.icon( {
  iconUrl: pin,// icon,
  iconSize: [ 24, 24],//[ 24, 36 ],
  iconAnchor: [ 12, 36 ],
  className: 'marker-style'
} )
L.Marker.prototype.options.icon = DefaultIcon;

const LeafletMap = ( { coord =[56, 10], zoom = "13",  info= "", setLat = null, setLon = null } ) => {

    const mapRef = useRef()   //reference/krog til map'et

    const markerRef = useRef() //reference til markøren-så den kan flyttes rundt

 

  

    //Indlæs map/kort når component er klar...
    useEffect(()=> {
      //Lav kortet -skal kun køre 1 gang ( når componenter loader )
      if (!mapRef.current) {

        mapRef.current = L.map ('mapcontainer').setView(coord, zoom)

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom:19,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> '

        } ).addTo(mapRef.current); 

        //Lav markør -overvej  at lave if/hvis der er "info" sendt med så skal popup være der- og ellers ikke
        markerRef.current = L.marker( coord ).addTo( mapRef.current )
        
        //Hvis der er info til popup
        if (info !== "") {
          markerRef.current.bindPopup(info)
          // .openPopUp()      
  }

      } else {
        //Flyt view på kortet så fokus er på de nye koordinator
        mapRef.current.setView( coord, zoom )
        //Flyt markøren
        markerRef.current.setLatLng( coord )
        // bindPopup(info)
        // .openPopup()


        //Hvis der er info til popup

   
         if ( setLat || setLon ) {
             //Snup koordinator fra kortet når der klikkes på kortet e.latlang.lat
            mapRef.current.on ('click', e => {
               setLat ( e.latlang.lat ); 
               setLon ( e.latlng.lng ) 
              } )
         }

     
      }
    },[ coord ] ) // lyt efter ændringer i koordinator

  return (
    <div id='mapcontainer' 
    style={{width: '500px', height: '500px'}} 
    className='mt-10 shadow-xl card bg-base-100'> Kortet loader... </div>
        
   
  )
}

export default LeafletMap
