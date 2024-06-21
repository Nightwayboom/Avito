import React, { useState } from 'react'
import './FormCreateProperty.css'
import requestAxios from '../../services/axios';

const FormCreateProperty = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [category, setCategory] = useState('')
	const [title, setTitle] = useState('')
	const [price, setPrice] = useState('')
	const [description, setDescription] = useState('')
	const [photo, setPhoto] = useState({})

	const handleSubmit = async e => {
		e.preventDefault()
		const formData = new FormData()
		formData.append('photo', photo[0])
		formData.append('title', title)
		formData.append('propertyCategoryId', category)
		formData.append('price', price)
		formData.append('description', description)
		const config = { headers: { 'Content-Type': 'multipart/form-data' } }
		const result = await requestAxios.post('/property', formData, config)
		console.log(result);

		
	
	}

	return (
		<div>
			<button
				onClick={() => setIsModalOpen(true)}
				className='open-modal-button'
			>
				Добавить недвижимость
			</button>
			{isModalOpen && (
				<div className='modal-overlay'>
					<div className='modal'>
						<h2>Добавить недвижимость</h2>
						<form onSubmit={handleSubmit}>
							<div className='form-group'>
								<label htmlFor='category'>Наименование категории:</label>
								<select
									id='category'
									value={category}
									onChange={e => setCategory(e.target.value)}
									required
								>
									<option value=''>Выберите категорию</option>
									<option value='2'>Дом</option>
									<option value='1'>Апартаменты</option>
									<option value='3'>Квартира</option>
								</select>
							</div>
							<div className='form-group'>
								<label htmlFor='price'>Полное название:</label>
								<input
									type='text'
									id='price'
									value={title}
									onChange={e => setTitle(e.target.value)}
									required
								/>
								<label htmlFor='price'>Цена:</label>
								<input
									type='number'
									id='price'
									value={price}
									onChange={e => setPrice(e.target.value)}
									required
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='description'>Описание:</label>
								<textarea
									id='description'
									rows='4'
									value={description}
									onChange={e => setDescription(e.target.value)}
									required
								/>
							</div>
							<div className='form-group'>
								<label htmlFor='files'>Фото:</label>
								<input
									type='file'
									id='files'
									onChange={e => setPhoto(e.target.files)}
									required
								/>
							</div>
							<div className='button-group'>
								<button type='submit'>Добавить</button>
								<button
									type='button'
									onClick={() => setIsModalOpen(false)}
									className='close-modal-button'
								>
									Закрыть
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	)
}

export default FormCreateProperty
