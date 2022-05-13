const initialState = {
    items: [],
    activePage: 1,
    next: true,
    prev: false
}

export function charactersReducer(state = initialState, action: { type: string, payload: any }) {
    switch (action.type) {
        case "SET_CHARACTERS":

            return {
                ...state,
                items: action.payload.items,
                next: action.payload.next,
                prev: action.payload.prev,
            }
        case "SET_ACTIVE_CHARACTER_PAGE":
            return {
                ...state,
                activePage: action.payload
            }
        default:
            return state
    }
}