import React from 'react'
import './PropertyCard.css'

function PropertyCard({ proper, setProperty, user }) {
	const addToFavorites = () => {
		// Логика для добавления в избранное
		console.log(`${proper.title} добавлен в избранное`)
	}

	return (
		<div>
			<div className='property-card'>
				<img src={proper.photo} alt={proper.title} className='property-image' />
				<div className='property-info'>
					<h2>{proper.title}</h2>
					<h3 className='property-price'>Цена : {proper.price} $</h3>
					<p>{proper.description}</p>
					<button className='favorite-button' onClick={addToFavorites}>
						Добавить в избранное
					</button>
					{user && user.isAdmin && (
						<button className='favorite-button' onClick={addToFavorites}>
							Удалить
						</button>
					)}
				</div>
			</div>
		</div>
	)
}

export default PropertyCard
