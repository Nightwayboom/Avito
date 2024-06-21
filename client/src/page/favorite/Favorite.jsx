import React from 'react'
function Favorite({ favorite, setFavorite, user }) {
	return (
		<div>
			<h1>Favorite {user.isAdmin && user.lastName}</h1>
		</div>
	)
}

export default Favorite
