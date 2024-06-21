import React, { useState, useEffect } from 'react';
import requestAxios from '../../services/axios';
import Modal from 'react-modal';
import './FormUpdateProperty.css';

Modal.setAppElement('#root');

function FormUpdateProperty({ proper, setProperty, setIsUpdate }) {
    const [title, setTitle] = useState(proper?.title || '');
    const [price, setPrice] = useState(proper?.price || '');
    const [description, setDescription] = useState(proper?.description || '');
    const [modalIsOpen, setModalIsOpen] = useState(true);

    useEffect(() => {
        setTitle(proper?.title  || '');
        setPrice(proper?.price  || '');
        setDescription(proper?.description  || '');
    }, [proper]);

    const onHandleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log('Submitting update:', { title, price, description });
            const { data } = await requestAxios.put(`/property/${proper.id}`, {
                title,
                price,
                description,
            });
            console.log('Response data:', data);
            if (data.message === 'success') {
                setProperty((prev) =>
                    prev.map((prop) => (prop.id === data.property.id ? data.property : prop))
                );
                setIsUpdate(false);
                setModalIsOpen(false); 
            }
        } catch (error) {
            console.error("Ошибка при обновлении недвижимости", error);
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setIsUpdate(false);
    };

    if (!proper) {
        return null; 
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            overlayClassName="modal-overlay"
            className="modal-content"
        >
            <h2 className="modal-header">Обновить недвижимость</h2>
            <form onSubmit={onHandleSubmit}>
                <label htmlFor="title" className="form-label">
                    Название
                    <input
                        type="text"
                        name="title"
                        value={title}
                        placeholder="Название"
                        onChange={(event) => setTitle(event.target.value)}
                        className="form-input"
                    />
                </label>
                <label htmlFor="price" className="form-label">
                    Цена
                    <input
                        type="text"
                        name="price"
                        value={price}
                        placeholder="Цена"
                        onChange={(event) => setPrice(event.target.value)}
                        className="form-input"
                    />
                </label>
                <label htmlFor="description" className="form-label">
                    Подробное описание
                    <input
                        type="text"
                        name="description"
                        value={description}
                        placeholder="Подробное описание"
                        onChange={(event) => setDescription(event.target.value)}
                        className="form-input"
                    />
                </label>
                <button type="submit" className="form-button">Сохранить</button>
            </form>
            <button onClick={closeModal} className="form-button cancel-button">Отменить</button>
        </Modal>
    );
}

export default FormUpdateProperty;