import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Home from '../pages/home/Home'
import { useSelector } from 'react-redux'

const Router = () => {

  const {isAuthenticated} = useSelector(state => state.auth);

  return (
    <BrowserRouter>
    <Routes>
        <Route path='/'>
            <Route element={<PublicRouter isAuthenticate={isAuthenticated} />}>
                <Route index element={<Login />}/>
                <Route path='register' element={<Register />} />
            </Route>
            <Route element={<PrivateRouter isAuthenticate={isAuthenticated}/>}>
                <Route path='home' element={<Home />} />
            </Route>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router