import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DcScreen } from '../components/dc/DcScreen'
import { HeroeScreen } from '../components/hero/HeroeScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { Navbar } from '../components/ui/Navbar'

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className='container'>
          <Routes>
                  <Route exact path='/' element={<MarvelScreen/>}/>
                  <Route exact path='marvel' element={<MarvelScreen/>}/>
                  <Route exact path='dc' element={<DcScreen/>}/>
                  <Route exact path='search' element={<SearchScreen/>}/>
                  <Route exact path='heroe/:heroeId' element={<HeroeScreen/>}/>
          </Routes>
        </div>
    </>
  )
}
 