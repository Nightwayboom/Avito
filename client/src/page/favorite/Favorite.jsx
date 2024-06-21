import React from 'react'
import FavoriteCard from './FavoriteCard'

function Favorite({ favorite, setFavorite, user }) {
	return (
		<div className='property-container'>
			<h1>Избранное</h1>
			<div className='property-list'>
				{favorite &&
					favorite.map(favor => (
						<FavoriteCard
							favor={favor}
							key={favor.id}
							setFavorite={setFavorite}
							user={user}
						/>
					))}
			</div>
		</div>
	)
}

export default Favorite
