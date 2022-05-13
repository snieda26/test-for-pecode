const initialState = {
    filterBy: '',
    value: ''
}

export function filterReducer(state = initialState, action: { type: string, payload: { filterBy: string, value: string } }) {
    switch (action.type) {
        case "SET_FILTER":
            return {
                ...state,
                filterBy: action.payload.filterBy,
                value: action.payload.value
            }
        default:
            return state
    }
}