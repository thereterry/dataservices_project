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

import Vejret from './openweather/vejret';
import Nyheder from './news/Nyheder';
import Energidata from './energydata/Energidata';

import HomeViborg from './viborghaveservice/HomeViborg';
import AdminEdit from './viborghaveservice/AdminEdit';

import ReviewsViborg from './viborghaveservice/ReviewsViborg';
 import SliderDataReviews from './viborghaveservice/SliderDataReviews';
//  import PostCreate from './viborghaveservice/PostCreate'
//  import PostEdit from './viborghaveservice/PostEdit'







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
     <Route path="adminedit" element={<AdminEdit/>} />
     <Route path="reviewsviborg" element={<ReviewsViborg/>} />
     <Route path="sliderdatareviews" element={<SliderDataReviews/>} />
     {/* <Route path="postcreate" element={ <PostCreate/> } />  */}
     {/* <Route path="/postedit/:postID" element={ <PostEdit/> } /> */}
  
   
   
     {/* ---------------- VEJRET ---------------- */}
     <Route path="openweather" element={<Vejret />} />
    
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
