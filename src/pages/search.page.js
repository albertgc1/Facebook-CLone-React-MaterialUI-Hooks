import React from 'react'
import Search from '../components/search'

const container = {
    width: '100%',
    marginTop: 70,
    textAlign: '-webkit-center'
}

const SearchPage = () => {
    return (
        <div style={container}>
            <Search />
        </div>
    )
}
 
export default SearchPage
