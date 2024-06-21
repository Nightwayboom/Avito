import React, { useState } from 'react'
import './PropertyCard.css'
import FormUpdateProperty from './FormUpdateProperty'

function PropertyCard({ proper, setProperty, user }) {
	const [isUpdate, setIsUpdate] = useState(false)

	const addToFavorites = () => {
		// Логика для добавления в избранное
		// console.log(${proper.title} добавлен в избранное);
	}

	return (
		<div>
			<div className='property-card'>
				<img src={proper.photo} alt={proper.title} className='property-image' />
				<div className='property-info'>
					<h2>{proper.title}</h2>
					<h3 className='property-price'>Цена: {proper.price} $</h3>
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
									<button
										className='favorite-button'
										onClick={() => console.log('Удалить')}
									>
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
