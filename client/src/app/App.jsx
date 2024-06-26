import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Authorization from '../page/auth/Authorization'
import Registration from '../page/auth/Registration'
import './App.css'
import Property from '../page/property/Property'
import Favorite from '../page/favorite/Favorite'
import Navbar from '../page/navbar/Navbar'
import Main from '../page/main/Main'
import NotFound from '../page/notfound/NotFound'
import Footer from '../page/footer/Footer'
import requestAxios, { setAccessToken } from '../services/axios'

function App() {
	const [user, setUser] = useState()
	const [property, setProperty] = useState()
	const [favorite, setFavorite] = useState([])

	const axiosProrerty = async () => {
		const { data } = await requestAxios.get('/property')
		if (data.message === 'success') {
			const updateData = data.allProperties.map(proper => {
				proper.isShow = true
				return proper
			})
			setProperty(updateData)
		}
	}

	const axiosFavorite = async () => {
		const { data } = await requestAxios.get('/favorites')
		if (data.message === 'success') {
			data.favorites.forEach(favorite => {
				setFavorite(prev => [...prev, favorite.Property])
			})
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
				<Navbar
					user={user}
					setUser={setUser}
					property={property}
					setProperty={setProperty}
				/>

				<Routes>
					<Route path='/' element={<Main />} />
					<Route
						path='/property'
						element={
							<Property
								property={property}
								setProperty={setProperty}
								user={user}
								setFavorite={setFavorite}
							/>
						}
					/>
					<Route
						path='/favorite'
						element={
							<Favorite
								favorite={favorite}
								setFavorite={setFavorite}
								user={user}
							/>
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

					<Route path='*' element={<NotFound />} />
				</Routes>
				<Footer />
			</div>
		</>
	)
}

export default App
