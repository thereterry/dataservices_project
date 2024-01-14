import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useRequestData from '../hooks/useRequestData'
import Loader from '../components/Loader'
import Error from '../components/Error'


const AdminEdit = () => {

  const { postID } = useParams()

  const { data, isLoading, error, makeRequest } = useRequestData()  //GET
  const { data: dataPUT, isLoading: isLoadingPUT , error: errorPUT, makeRequest: makeRequestPUT } = useRequestData()  //PUT

  const [ title, setTitle ] = useState( "")
  const [ content, setContent ] = useState( "")

  useEffect(()=> {
    makeRequest( "http://localhost:5023/aboutus" )
}, [ ])

useEffect(()=> {

  if(data) {
      setTitle( data.title)
      setContent( data.content)
  }
}, [ data ])

const handleSubmit = e => {
  // console.log("tester")
  e.preventDefault();   //VIGTIG!! Undgå at siden genindlæs -tømmer alt i state mv.!
  const rettePost = { title, content }

  makeRequestPUT( "http://localhost:5023/aboutus/admin", "PUT", rettePost) 

}
  return (
  
    <div>
      <h1>Admin- Edit/Update</h1>

      { error ||  errorPUT && <Error/>}

      { isLoading ||  isLoadingPUT && <Loader/> }

   
      {
        dataPUT && dataPUT.about &&
        <div className='bg-blue-100 shadow-xl card'>
          <div className='card-boy'>
          <h2>About Us er rettet: </h2> 
            <p>Title: {dataPUT.about.title}</p>
            <p>Content: {dataPUT.about.content}</p>
          </div>
         
        </div>
      }
      <form className='form-control' onSubmit={ handleSubmit }>

        <label htmlFor='inputTitle'>Title</label>
        <input id="inputTitle" 
        type="text" 
        onInput= { e => setTitle( e.target.value ) }
        value={ title }
        required placeholder='Titel' 
        className='w-full max-w-xs input input-bordered'

        />

        <label htmlFor='txtContent' className='mt-4'>Content</label>
        <textarea id = "txtContent" 
        onInput={ e => setContent(e.target.value) }
        value={ content }
        required placeholder='content' 
        className='textarea'>

        </textarea>

        <button type='submit' className='btn_submit'>Ret Post</button>
      </form>

    </div>
  )
  return { data, isLoading, error, makeRequest };
}

export default AdminEdit


