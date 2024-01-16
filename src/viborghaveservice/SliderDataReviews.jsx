import React, { useState,useEffect } from 'react'
import {  useParams } from 'react-router-dom'
import useRequestData from '../hooks/useRequestData'
import Error from '../components/Error'
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
const SliderDataReviews = () => {
  

    const { data, isLoading, error, makeRequest } = useRequestData()  //GET

    const { data: dataPUT, isLoading: isLoadingPUT , error: errorPUT, makeRequest: makeRequestPUT } = useRequestData()  //PUT

    const { data: dataDelete, isLoading: isLoadingDelete, error: errorDelete, makeRequest: makeRequestDelete } = useRequestData();

    const [ author, setAuthor ] = useState( "")
    const [ content, setContent ] = useState( "")
    const [ userId, setUserID ] = useState("")


    useEffect(()=> {
        makeRequest( "http://localhost:5023/reviews"   )
    }, [ ])


    useEffect(()=> {

        if(data) {
            setAuthor( data.author)
            setContent( data.content)
        }
      }, [ data ])
      

      const handleSubmit = e => {
        // console.log("tester")
        e.preventDefault();   //VIGTIG!! Undgå at siden genindlæs -tømmer alt i state mv.!
        const rettePost = { title, content }
      
        makeRequestPUT( "http://localhost:5023/reviews/admin/5f58f83089fef55ec40aa587", "PUT", rettePost) 
      
      }

      const createMarkup = (htmlString) => {
        return { __html: htmlString };
      };
  

    
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin af sliderdata/reviews</h1>
        { error ||  errorPUT && <Error/>}
        { isLoading ||  isLoadingPUT && <Loader/> }

        { dataDelete && <h2 className="text-lg text-green-600">Du har netop slettet en Reviews</h2> }

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <td scope="col" className="py-3 px-6">ID</td>
            <td scope="col" className="py-3 px-6">AUTHOR</td>
            <td scope="col" className="py-3 px-6">RET</td>
            <td scope="col" className="py-3 px-6">SLET</td>
             <td><Link to={"/postcreate/"} className="btn">Create</Link></td> 
          </tr>
        </thead>
        
        <tbody>
            {
            data && data.map(review =>       
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <br />
                    <td className="py-4 px-6">{review.author}</td>
                    <td className="py-4 px-6">{review.content}</td>     
                    <td>
                    <Link to={"/postedit/" + review.id} className="btn">
                        <FaEdit size= "2em" color= "darkgreen"  />
                    </Link>
                </td>
                    <td className="py-4 px-6">
                        <button onClick={() => handleDelete(review.id, review.title)}>
                        <FaTrash size="2em" color="darkred" className="cursor-pointer"/>
                        </button>
                    </td>     
                </tr>
        )}
            
            </tbody>
        </table>
      </div>
        
       

              

    </div>
  )
  return { data, isLoading, error, makeRequest };
}

export default SliderDataReviews

