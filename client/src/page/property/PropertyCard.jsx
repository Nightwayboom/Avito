import React, { useState } from 'react'
import './PropertyCard.css'
import FormUpdateProperty from './FormUpdateProperty'
import requestAxios from '../../services/axios'

function PropertyCard({ proper, setProperty, user, setFavorite }) {
	const [isUpdate, setIsUpdate] = useState(false)

	const addToFavorites = async () => {
		const { data } = await requestAxios.post('/favorites', {
			propertyId: proper.id,
		})
		if (data.message === 'success') {
			console.log(data);
			setFavorite(prev => [...prev, data.property.Property])
		}
	}
	const DeleteProperty = async () => {
		const { data } = await requestAxios.delete(`/property/${proper.id}`)
		if (data.message === 'success') {
			setProperty(prev =>
				prev.filter(delProperty => delProperty.id !== proper.id)
			)
		}
	}

	return (
		<div>
			<div className='property-card'>
				<img src={proper.photo} alt={proper.title} className='property-image' />
				<div className='property-info'>
					<h2>{proper.title}</h2>
					<h3 className='property-price'>Цена : {proper.price} $ за ночь</h3>
					<p>{proper.description}</p>
					{isUpdate ? (
						<FormUpdateProperty
							proper={proper}
							setProperty={setProperty}
							setIsUpdate={setIsUpdate}
						/>
					) : (
						<>
							{user && !user?.isAdmin && (
								<button className='favorite-button' onClick={addToFavorites}>
									Добавить в избранное
								</button>
							)}
							{user && user?.isAdmin && (
								<>
									<button
										className='favorite-button'
										onClick={() => setIsUpdate(true)}
									>
										Изменить
									</button>
									<button className='favorite-button' onClick={DeleteProperty}>
										Удалить
									</button>
								</>
							)}
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default PropertyCard
