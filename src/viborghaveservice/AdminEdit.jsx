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
 
  e.preventDefault();   //VIGTIG!! Undgå at siden genindlæs -tømmer alt i state mv.!
  const rettePost = { title, content }

  makeRequestPUT( "http://localhost:5023/aboutus/admin", "PUT", rettePost) 

}
  return (
  
    <div className='container mx-auto p-4'>
      <h1>Admin- Edit/Update</h1>

      { error ||  errorPUT && <Error/>}

      { isLoading ||  isLoadingPUT && <Loader/> }

   
      {
        dataPUT && dataPUT.about &&
        <div className='bg-blue-100 shadow-xl p-4 rounded-lg mb-6'>
          <h2 className='text-lg font-semibold'>About Us er rettet: </h2> 
            <p><strong>Title:</strong>{dataPUT.about.title}</p>
            <p><strong>Content: {dataPUT.about.content}</strong></p>
         
         
        </div>
      }

      <div>
          <form className='space-y-4' onSubmit={ handleSubmit }>

            <label htmlFor='inputTitle' className='block text-sm font-medium text-gray-700'>Title</label>
            <input id="inputTitle" 
            type="text" 
            onInput= { e => setTitle( e.target.value ) }
            value={ title }
            required placeholder='Titel' 
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'   />
          </form>
      </div>
      <div>
          <label htmlFor='txtContent' className='block text-sm font-medium text-gray-700'>Content</label>
            <textarea id = "txtContent" 
            onInput={ e => setContent(e.target.value) }
            value={ content }
            required placeholder='content' 
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border indigo-500'>
            </textarea>
      </div>
    

        

        <button type='submit' className='px-4 py-2 bg-green-500 hover:bg-blue-700 text-white font-bold rounded-lg shadow'>Ret Post</button>
   

    </div>
  )
  return { data, isLoading, error, makeRequest };
}

export default AdminEdit


