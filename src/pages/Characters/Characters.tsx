import React, { useEffect } from 'react'
import { CharacterItem, PaginationBlock, Modal, CharacterFilter } from '../../components'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setCharacters } from '../../redux/actions'
import { RootState } from '../../redux/store'
import { CharacterType } from '../../types'

import './Characters.scss'

function Characters() {

    const dispatch = useDispatch()

    const { items, activePage } = useSelector((state: RootState) => state.characters)
    const { isVisible: isVisibleModal } = useSelector((state: RootState) => state.modal)
    const { filterBy, value } = useSelector((state: RootState) => state.filter)

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/?page=${activePage}${filterBy && '&' + filterBy + '=' + value}`).then(({ data }) => dispatch(setCharacters({ items: data.results, prev: data.info.prev, next: data.info.next })))
    }, [activePage, filterBy, value])

    return (
        <>

            {isVisibleModal && <Modal />}
            <div className="filter__blocks">
                <CharacterFilter items={['Alive', 'Dead', 'unknown']} filterBy="status" />
                <CharacterFilter items={['Human', 'Humanoid', 'Alien',
                    'Mythological Creature', 'Robot', 'Disease', 'Cronenberg', 'unknown', 'Animal',
                    'Poopybutthole', 'Planet']} filterBy="species" />
                <CharacterFilter items={['Male',
                    'Female', 'unknown', 'Genderless']} filterBy="gender" />
            </div>


            {
                items.map(({ name, id, image, status, species, gender }: CharacterType, ind: number) => {
                    return <CharacterItem title={name} key={id}
                        image={image}
                        status={status}
                        species={species}
                        gender={gender} />
                })
            }
            <PaginationBlock />
        </>
    )
}

export default Characters