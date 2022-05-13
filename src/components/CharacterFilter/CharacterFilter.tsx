import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCharacterPage, setFilterCase } from '../../redux/actions';
import { RootState } from '../../redux/store';
import './CharacterFilter.scss'

interface CharacterFilterProps {
    items: string[],
    filterBy: string
}

export function CharacterFilter({ filterBy, items }: CharacterFilterProps) {

    const [isVisible, setIsVisible] = useState<boolean>(false)
    const { filterBy: filterMethod, value } = useSelector((state: RootState) => state.filter)

    const dispatch = useDispatch()

    const setFilter = (filterValue: string) => {
        dispatch(setFilterCase({ filterBy, value: filterValue }))
        dispatch(setActiveCharacterPage(1))
    }

    return (
        <>

            <div className='filter' onClick={() => setIsVisible(!isVisible)}>
                <span>{filterBy}</span>
                {
                    isVisible && items.map((item: string, ind: number) => {
                        return <p onClick={() => setFilter(item)} className={`filter__item ${filterBy === filterMethod && item === value ? 'active' : ''}`} key={item + ind}>{item}</p>
                    })
                }
            </div>

        </>
    )
}