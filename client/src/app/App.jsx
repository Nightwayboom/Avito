import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Authorization from '../page/auth/Authorization';
import Registration from '../page/auth/Registration';
import './App.css'
import Property from '../page/property/Property';
import Favorite from '../page/favorite/Favorite';
import Navbar from '../page/navbar/Navbar';
import Main from '../page/main/Main';


import requestAxios, { setAccessToken } from '../services/axios';


function App() {
  const [user, setUser] = useState()
  const [property, setProperty] = useState()
  const [favorite, setFavorite] = useState()

  const axiosProrerty = async () => {
    const { data } = await requestAxios.get('/property')
    if (data.message === 'success') {
      setProperty(data.property)
    }
  }

  const axiosFavorite = async () => {
    const { data } = await requestAxios.get('/favorite')
    if (data.message === 'success') {
      setFavorite(data.favorite)
    }
  }

  const AxiosCheckUser = async () => {
    const { data } = await requestAxios.get('/tokens/refresh')
    if (data.message === 'success') {
      setUser(data.user)
      setAccessToken(data.setAccessToken)
    }
  }

  useEffect(() => {
    axiosFavorite()
    axiosProrerty()
    AxiosCheckUser()
  }, [])

  return (
    <>

      <div>
        <Navbar user={user} setUser={setUser} />
        <h1>Добро пожаловать на AVITO </h1>

        <Routes>
          <Route path='/' element={<Main />} />
          <Route
            path='/property'
            element={<Property property={property} setProperty={setProperty} />}
          />
          <Route
            path='/favorite'
            element={
              <Favorite favorite={favorite} setFavorite={setFavorite} user={user} />
            }
          />
          <Route
            path='/registration'
            element={<Registration setUser={setUser} />}
          />
          <Route
            path='/authorization'
            element={<Authorization setUser={setUser} />}
          />

          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </div>




    </>
  )
}

export default App
