import React, { useState } from 'react'
import './FavoriteCard.css'
import requestAxios from '../../services/axios'

function FavoriteCard({ favor, setFavorite, user }) {
	// const [isUpdate, setIsUpdate] = useState(false)

	const DeleteFavorite = async () => {
		const { data } = await requestAxios.delete(`/favorites/${favor.id}`)
		if (data.message === 'success') {
			setFavorite(prev =>
				prev.filter(delFavor => delFavor.id !== favor.id)
			)
		}
	}

	return (
		<div>
			<div className='property-card'>
				<img src={favor.photo} alt={favor.title} className='property-image' />
				<div className='property-info'>
					<h2>{favor.title}</h2>
					<h3 className='property-price'>Цена: {favor.price} $</h3>
					<p>{favor.description}</p>

					<button className='favorite-button' onClick={DeleteFavorite}>
						Удалить
					</button>
				</div>
			</div>
		</div>
	)
}

export default FavoriteCard
