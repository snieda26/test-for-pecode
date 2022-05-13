import { CharacterType } from './../../types/character';

export const setCharacters = (payload: { items: Array<CharacterType>, next: boolean, prev: boolean }) => {
    return { type: "SET_CHARACTERS", payload }
}

export const setActiveCharacterPage = (payload: number) => {
    return { type: "SET_ACTIVE_CHARACTER_PAGE", payload }
}