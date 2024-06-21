import React, { useState } from 'react'
import './FormCreateProperty.css'

const FormCreateProperty = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [title, setTitle] = useState('')
	const [director, setDirector] = useState('')
	const [year, setYear] = useState('')
	const [img, setImg] = useState('')
	const [rating, setRating] = useState('')

	const handleSubmit = e => {
		e.preventDefault()
		// Обработка данных формы
		console.log({ title, director, year, genre, description, userId: 1, genreId : movie.id })
	}

	return (
		<div>
			<button
				onClick={() => setIsModalOpen(true)}
				className='open-modal-button'
			>
				Добавить фильм
			</button>
			{isModalOpen && (
				<div className='retro-modal-overlay'>
					<div className='retro-modal'>
						<h2>Добавить фильм</h2>
						<form onSubmit={handleSubmit}>
							<div className='retro-form-group'>
								<label htmlFor='title'>Название фильма:</label>
								<input
									type='text'
									id='title'
									value={title}
									onChange={e => setTitle(e.target.value)}
									required
								/>
							</div>
							<div className='retro-form-group'>
								<label htmlFor='director'>Режиссер:</label>
								<input
									type='text'
									id='director'
									value={director}
									onChange={e => setDirector(e.target.value)}
									required
								/>
							</div>
							<div className='retro-form-group'>
								<label htmlFor='year'>Год выпуска:</label>
								<input
									type='text'
									id='year'
									value={year}
									onChange={e => setYear(e.target.value)}
									required
								/>
							</div>
							<div className='retro-form-group'>
								<label htmlFor='genre'>Жанр:</label>
								<input
									type='text'
									id='genre'
									value={year}
									onChange={e => setImg(e.target.value)}
									required
								/>
							</div>
							<div className='retro-form-group'>
								<label htmlFor='description'>Описание:</label>
								<textarea
									id='description'
									rows='4'
									value={rating}
									onChange={e => setRating(e.target.value)}
									required
								/>
							</div>
							<button type='submit'>Добавить</button>
							<button
								type='button'
								onClick={() => setIsModalOpen(false)}
								className='close-modal-button'
							>
								Закрыть
							</button>
						</form>
					</div>
				</div>
			)}
		</div>
	)
}
export default FormCreateProperty
