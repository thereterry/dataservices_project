import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    return (


        <nav className='bg-blue-500 p-4'>
            <div className='container mx-auto flex justify-between items-center'>
               

                <ul className='nav-links'>
                    <li>
                    <NavLink to="/" >
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/about">
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
                    <NavLink to="/abouteditviborg">
                     About Edit- Viborg
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/reviewsviborg">
                    Reviews-Viborg
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/adminreviewsviborg">
                    Admin Reviews- Viborg
                    </NavLink>
                    </li>
                  
                    <li>    
                         <NavLink to="/weather"  className="hover:text-gray-200">Vejret
                         </NavLink>
                    </li>
                    <li>    
                         <NavLink to="/news"  className="hover:text-gray-200">Nyheder
                         </NavLink>
                    </li>
                 
                    <li>    
                         <NavLink to="/news"  className="hover:text-gray-200">Energidata
                         </NavLink>
                    </li>
                
                
                  
                </ul>
    


            </div>
        </nav>
    )
}

export default Navbar