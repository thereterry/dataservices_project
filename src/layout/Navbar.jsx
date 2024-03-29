import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (


        <nav className='bg-green-500 p-4'>
            <div className='container mx-auto flex justify-between items-center'>
               

                <ul className='flex gap-x-4'>
                    <li>
                    <NavLink to="/" className='text-white hover:text-gray-200 py-2 px-4 rounded font-semibold'> 
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/about" className='text-white hover:text-gray-200 py-2 px-4 rounded font-semibold'>
                        Om os
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/home">
                        Hjem
                    </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            Kontakt
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/admin">
                        ADMIN
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/homeviborg">
                    Home Viborg
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/adminedit">
                    Admin-Edit
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/reviewsviborg">
                    Reviews-Viborg
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/sliderdatareviews">
                    Viborg Haveservice-admin af sliderdata/reviews
                    </NavLink>
                    </li>
                  
                  
                  
                    <li>    
                         <NavLink to="/openweather"  className="hover:text-gray-200">Vejret
                         </NavLink>
                    </li>
                    <li>    
                         <NavLink to="/dawa"  className="hover:text-gray-200">DAWA og map
                         </NavLink>
                    </li>
                    <li>    
                         <NavLink to="/news"  className="hover:text-gray-200">Nyheder
                         </NavLink>
                    </li>
                 
                    <li>    
                         <NavLink to="/energydata"  className="hover:text-gray-200">Energidata
                         </NavLink>
                    </li>
                
                
                  
                </ul>
    


            </div>
        </nav>
    )
}

export default Navbar