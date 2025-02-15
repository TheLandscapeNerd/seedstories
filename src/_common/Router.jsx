import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../auth/Login'
import LogoutRoute from '../auth/LogoutRoute'
import Entries from '../entries/Entries'
import Home from '../home/Home'
import SeedFields from '../seeds/SeedFields'
import Seeds from '../seeds/Seeds'
import Layout from './Layout'
import Profile from '../user/Profile'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/bank" element={<Seeds />} />
          <Route path="/seedFields" element={<SeedFields />} />
          <Route path="/notebook" element={<Entries />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<LogoutRoute />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router