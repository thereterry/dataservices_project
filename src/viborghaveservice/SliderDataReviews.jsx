import React, { useState , useEffect} from 'react'
import useRequestData from "../hooks/useRequestData";
import Loader from "../components/Loader";
import { Link } from "react-router-dom";

const SliderDataReviews = () => {

    const { data, isLoading, error, makeRequest }   = useRequestData();   //GET

    useEffect(()=> {
        makeRequest("http://localhost:5023/reviews");
      },[])

    // const { data: dataDelete, isLoading: isLoadingDelete, error: errorDelete, makeRequest: makeRequestDelete } = useRequestData();   

    const [ title, setTitle ] = useState("")
    const [ body, setBody ] = useState("")
    const [ userId, setUserID ] = useState("")


    const handleSubmit = e => {
    //     // console.log("tester")
       e.preventDefault();   //VIGTIGT

     const nyPost = { title, body, userId }

     makeRequest( "http://localhost:5023/reviews/posts" , "PUT", nyPost)

     }
  return (
    <div>
      <h1>Admin af Sliderdata Reviews</h1>

        {/* {
         data && <h2>Ny er oprettet- den fik ID : { data.id }</h2>
        } */}

            <form className='form-control' onSubmit={ handleSubmit }>

                <label htmlFor='inputTitle'>Title</label>
                <input id="inputTitle" 
                type="text" 
                onInput= { e => setTitle( e.target.value ) }
                value={ title }
                required placeholder='Titel' 
                className='input'

                />

                <label>Body</label>
                <textarea id = "txBody" 
                value={ body }
                required placeholder='body' 
                className='textarea'>

                </textarea>

                <label>Id på user</label>
                <input id = "txtUser" 
                value={ userId }
                type="number"
                placeholder='User Id' 
                className='number' />

                <button type='submit' className='btn_submit'>Opret Ny Post</button>
            </form>
        </div>
    )
    return { data, isLoading, error, makeRequest };
}

export default SliderDataReviews
