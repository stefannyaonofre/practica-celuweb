import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicRouter from './PublicRouter'
import PrivateRouter from './PrivateRouter'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Home from '../pages/home/Home'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/'>
            <Route element={<PublicRouter isAuthenticate={false} />}>
                <Route index element={<Login />}/>
                <Route path='register' element={<Register />} />
            </Route>
            <Route element={<PrivateRouter isAuthenticate={false}/>}>
                <Route path='home' element={<Home />} />
            </Route>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Router