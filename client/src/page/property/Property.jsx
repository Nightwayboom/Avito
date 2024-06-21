import React, { useEffect, useState } from 'react'
import requestAxios from '../../services/axios'
import PropertyCard from './PropertyCard'
import FormCreateProperty from './FormCreateProperty'
import './Property.css'

function Property({ user }) {
	const [property, setProperty] = useState([])

	const axiosProperty = async () => {
		const { data } = await requestAxios.get('/property')
		if (data.message === 'success') {
			const updateData = data.allProperties.map(proper => {
				proper.isShow = true
				return proper
			})
			setProperty(updateData)
		}
	}

	useEffect(() => {
		axiosProperty()
	}, [])

	return (
		<div className='property-container'>
			{user && user?.isAdmin && <FormCreateProperty />}
			<h1>Недвижимость</h1>
			<div className='property-list'>
				{property &&
					property.map(proper => (
						<PropertyCard
							proper={proper}
							key={proper.id}
							setProperty={setProperty}
							user={user}
						/>
					))}
			</div>
		</div>
	)
}

export default Property
