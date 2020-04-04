import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Nav from './components/nav'
import Auth from './components/auth'
//import Posts from './components/posts'

function App() {
  return (
    <>
      <Nav />
      <BrowserRouter>
        <Route path='/login' component={ Auth } />
        <Route path='/register' component={ Auth } />
      </BrowserRouter>
    </>
  )
}

export default App
