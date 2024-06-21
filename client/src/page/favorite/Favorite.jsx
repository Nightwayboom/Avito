import React from 'react'
import PropertyCard from '../property/PropertyCard'
function Favorite({ favorite, setFavorite, user }) {
	return (
		<div className='property-container'>
			<h1>Избранное</h1>
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

export default Favorite
