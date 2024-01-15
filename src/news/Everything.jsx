import React, { useEffect, useState } from 'react';
import useRequestData from '../hooks/useRequestData'
import Loader from '../components/Loader'
import Error from '../components/Error'
import newsRequestParameters from './newsapi_requestparameters.json'

import { formatDistanceToNow } from 'date-fns';
import { da } from 'date-fns/locale'


const Everything = () => {
    const { makeRequest, isLoading, data, error } = useRequestData()

    const [  searchKey, setSearchKey ] = useState ("denmark")

    const [ language, setLanguage ] = useState( "de" )

    const [ sort, setSort ] = useState()

    const [ order, setOrder ] = useState()


    useEffect(()=> {
        makeRequest("https://newsapi.org/v2/everything?q=" + searchKey + "&pageSize=50&language=" + language +  "&apiKey=" + import.meta.env.VITE_APP_NEWSAPIKEY, "GET")
    }, [ language, setOrder ])

    const handleSearch = e => {

        // e.preventDefault()
        makeRequest( "https://newsapi.org/v2/everything?q=" + searchKey + "&pageSize=50&language=" + language  + "&apiKey=" + import.meta.env.VITE_APP_NEWSAPIKEY, "GET" )

    }

    const handleSortChange = e => {
        makeRequest( "https://newsapi.org/v2/everything?q=" + searchKey + "&pageSize=50&language=" + language  + "&apiKey=" + import.meta.env.VITE_APP_NEWSAPIKEY, "GET" )

    }


  return (
    <div>
      <h1>Nyheder- Everything</h1>

        { isLoading && <Loader/> }

        { error && <Error/> }
        <form onSubmit={ e => {handleSearch}}>
                <input type = "search" 
                    onChange = { ( e ) => setSearchKey( e.target.value ) } 
                    value = { searchKey }
                    placeholder= "Søg noget" 
                    className='input-border'
                    onKeyUp={handleSearch}
                    />
        </form>

            <select onChange = { e => setLanguage( e.target.value)} value = { language}>
                    {
                        newsRequestParameters.language.map( lang=> 
                            <option key={lang.code} value={lang.code}>{lang.language}</option>
                        ) }
            </select>

            <select onChange={handleSortChange} value={setOrder}>
            <option value="publishedAt">publishedAt</option>
                <option value="relevancy">relevancy</option>
                <option value="popularity">popularity</option>
            
            </select>

            <div className='grid'>

{
    data && data.articles.map( n => (
        <div className='card' key={ n.url }>
                <figure>
                    <img src={ n.urlToImage} alt= "" />
                </figure>

                <div className='card-body'>
                    <div className='card-title'>
                        <h2>{n.title}</h2>
                    </div>
                    <p>
                        { new Date(n.publishedAt).toLocaleString("da-dk", { year: "numeric", month: "long", day: "numeric", hour: "numeric" }) }
                    </p>
                    { /** FORMAT DISTANCE TO NOW - Se imports */ }
                    <p>{formatDistanceToNow(new Date( n.publishedAt), { locale: da, addSuffix: true })}
                    </p>
            
                    <h3>{n.description}</h3>
                    {n.content}
                    <p>
                        <a href={ n.url} target='_blank' rel='noreferrer'>Læs mere</a>
                    </p>
                </div>
        </div>
    ))
}
</div>


    </div>
  )
}

export default Everything
