import React from 'react'
import { useDispatch } from 'react-redux';
import { setModalData } from '../../redux/actions';
import './CharacterItem.scss'

interface CharacterProps {
    title: string;
    image: string;
    status: string;
    species: string;
    gender: string;
}

export function CharacterItem({ title, image, species, status, gender }: CharacterProps) {

    const dispatch = useDispatch()

    const openModal = () => {
        dispatch(setModalData({ title, image, species, status, gender, isVisible: true }))
    }

    return (
        <>
            <div className='movie' onClick={openModal}>
                <img src={image} alt="image" />
                <div className="overview">
                    <span>title: {title}</span>
                    <span>status: {status}</span>
                    <span>species: {species}</span>
                    <span>gender: {gender}</span>
                </div>
                <div className="movie__info">
                    <span>{title}</span>
                </div>
            </div>
        </>
    )
}