import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveCharacterPage } from '../../redux/actions'
import { RootState } from '../../redux/store'
import './PaginationBlock.scss'

export function PaginationBlock() {
    const { activePage, prev, next } = useSelector((state: RootState) => state.characters)
    const dispatch = useDispatch()

    const setNextPage = () => {
        next && dispatch(setActiveCharacterPage(activePage + 1))
    }

    const setPrevPage = () => {
        prev && dispatch(setActiveCharacterPage(activePage - 1))
    }

    return (
        <>
            <div className="pagination">
                <button className={`pagination__btn prev ${!prev && 'disabled'}`} onClick={setPrevPage}>prev</button>
                <span>{activePage}</span>
                <button className={`pagination__btn next ${!next && 'disabled'}`} onClick={setNextPage}>next</button>
            </div>
        </>
    )
}