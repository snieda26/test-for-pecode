const initialState = {
    isVisible: false,
    image: '',
    title: '',
    status: '',
    gender: '',
    species: '',
}

export function modalReducer(state = initialState, action: { type: string, payload: any }) {
    switch (action.type) {
        case "SET_MODAL_DATA":
            return {
                ...state,
                ...action.payload
            }

        default:
            return state
    }
}