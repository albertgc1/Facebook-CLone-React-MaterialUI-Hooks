import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import Nav from './components/nav'
import Auth from './components/auth'
import Posts from './components/posts'

const auth = true

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />

        { auth
          ? <Route path='/' exact component={ Posts } />
          : <Redirect path='/' to='/login' />
        }

        { !auth &&
        <>
          <Route path='/login' component={ Auth } />
          <Route path='/register' component={ Auth } />
        </>
        }

      </BrowserRouter>
    </>
  )
}

export default App
