import React, { useContext } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import { Context } from './server/Context'

import Nav from './components/nav'
import Auth from './components/auth'
import Home from './components/Home'
import FooterNav from './components/nav/fotterNav'
import SearchPage from './pages/search.page'
import ProfilePage from './pages/profile.page'
import SettingsPage from './pages/settings.page'

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

        { userAuth &&
          <>
            <Route path='/search' component={ SearchPage } />
            <Route path='/profile' component={ ProfilePage } />
            <Route path='/settings' component={ SettingsPage } />
          </> 
        }

        { !userAuth &&
        <>
          <Route path='/login' component={ Auth } />
          <Route path='/register' component={ Auth } />
        </>
        }
        { userAuth && <FooterNav /> }
      </BrowserRouter>
    </>
  )
}

export default App
