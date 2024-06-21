
import React from 'react'
import './PropertyCard.css'
import requestAxios from '../../services/axios'

function PropertyCard({ proper, setProperty, user }) {
	const addToFavorites = () => {
		// Логика для добавления в избранное
		console.log(`${proper.title} добавлен в избранное`)
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
					<h3 className='property-price'>Цена : {proper.price} $</h3>
					<p>{proper.description}</p>
					{user && (
						<button className='favorite-button' onClick={addToFavorites}>
							Добавить в избранное
						</button>
					)}
					{user && user.isAdmin && (
						<button className='favorite-button' onClick={DeleteProperty}>
							Удалить
						</button>
					)}
				</div>
			</div>
		</div>
	)
}

export default PropertyCard;