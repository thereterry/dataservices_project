import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import './App.css'
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Login from './views/Login'
import NoMatch from './views/NoMatch'
import Layout from './layout/Layout'
import LayoutAdmin from './Layout/ADMIN/LayoutAdmin'
import HomeAdmin from './views/ADMIN/HomeAdmin'
import News from './views/News';

import vejret from './weather/Vejret'
import Nyheder from './news/Nyheder';
import Energidata from './energydata/Energidata';

import HomeViborg from './viborghaveservice/HomeViborg';
import AboutEditViborg from './viborghaveservice/AboutEditViborg';
import ReviewsViborg from './viborghaveservice/ReviewsViborg';
import AdminReviewsViborg from './viborghaveservice/AdminReviewsViborg';






function App () {

  // ROUTER PROVIDER
  const router = createBrowserRouter(

    createRoutesFromElements(
      <>
        {/* ---------------- PUBLIC ---------------- */ }
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="about" element={ <About /> } />
          <Route path="contact" element={ <Contact /> } />
          <Route path="news" element={ <News /> } />
          <Route path="login" element={ <Login /> } />
          <Route path="*" element={ <NoMatch /> } />
        </Route>

     {/* ---------------- VIBORGHAVESERVICE ---------------- */}
     <Route path="homeviborg" element={<HomeViborg/>} />
     <Route path="abouteditviborg" element={<AboutEditViborg/>} />
     <Route path="reviewsviborg" element={<ReviewsViborg/>} />
     <Route path="adminreviewsviborg" element={<AdminReviewsViborg/>} />
   
   
     {/* ---------------- VEJRET ---------------- */}
     <Route path="weather" element={<vejret />} />
    
        {/* ---------------- NYHEDER---------------- */}
        <Route path="news" element={<Nyheder/>} />

          {/* ---------------- ENERGI-DATA---------------- */}
          <Route path="energydata" element={<Energidata/>} />


    
     
        {/* ---------------- ADMIN ---------------- */ }
        <Route path="/admin" element={ <LayoutAdmin /> }>
          <Route index element={ <HomeAdmin /> } />
          <Route path="*" element={ <NoMatch /> } />
        </Route>
      </>
    )
  )

  return (
    <section>
      <RouterProvider router={ router } />
      {/* <h1>Forsiden</h1> */ }

    </section>
    


  )
}

export default App
