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
      <h1>Admin af sliderdata/reviews</h1>
        { error ||  errorPUT && <Error/>}
        { isLoading ||  isLoadingPUT && <Loader/> }

        { dataDelete && <h2>Du har netop slettet en Reviews</h2> }


        <table className="table table-zebra">
        <thead>
          <tr>
            <td>ID</td>
            <td>AUTHOR</td>
            <td>RET</td>
            <td>SLET</td>
             <td><Link to={"/postcreate/"} className="btn">Create</Link></td> 
          </tr>
        </thead>
        
        <tbody>
            {
            data && data.map(review =>       
                <div>
                    <br />
                    <td>{review.author}</td>
                    <td>{review.content}</td>     
                    <td>
                    <Link to={"/postedit/" + review.id} className="btn">
                        <FaEdit size= "2em" color= "darkgreen"  />
                    </Link>
                </td>
                    <td>
                        <button onClick={() => handleDelete(p.id, p.title)}>
                        <FaTrash size="2em" color="darkred" className="cursor-pointer"/>
                        </button>
                    </td>     
                </div>
        )}
            
            </tbody>
        </table>
       

              

    </div>
  )
  return { data, isLoading, error, makeRequest };
}

export default SliderDataReviews

