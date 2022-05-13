import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setModalData } from '../../../redux/actions'
import { RootState } from '../../../redux/store'
import './Modal.scss'

export function Modal() {

    const dispatch = useDispatch()
    const { image, title, status, gender, species, } = useSelector((state: RootState) => state.modal)

    const closeModal = () => {
        dispatch(setModalData({ isVisible: false }))
    }


    return (
        <>
            <div className="modal">
                <div className="modal__wrapper">
                    <button className="modal__close" onClick={closeModal} >close</button>
                    <div className="modal__content">
                        <div>
                            <img src={image} alt="img" />
                            <span>{title}</span>
                        </div>
                        <div>
                            <div className="modal__info">
                                <span>status : {status}</span>
                                <span>gender : {gender}</span>
                                <span>species : {species}</span>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
}