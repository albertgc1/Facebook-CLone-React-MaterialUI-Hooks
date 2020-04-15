import React, { useState, useEffect, useRef } from 'react'
import CardSearch from './card'
import { search } from '../../containers/post.container'

const Search = () => {

    const [ results, setResults ] = useState([])
    const [ query, setQuery ] = useState('')

    useEffect(() => {
        search(query)
            .then(res => setResults(res.data))
            .catch(e => console.log(e))

    }, [query])

    console.log(query)

    return (
        <CardSearch results={results} setQuery={setQuery} />
    )
}
 
export default Search
