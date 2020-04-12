import React, { useContext } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { Context } from './server/Context'

import Nav from './components/nav'
import Auth from './components/auth'
import Home from './components/Home'

const App = () => {

  const { userAuth } = useContext(Context)

  return (
    <>
      <BrowserRouter>
        <Nav user={ userAuth }/>

        { userAuth
          ? <Route path='/' exact component={ Home } />
          : <Redirect path='/' to='/login' />
        }

        { !userAuth &&
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
