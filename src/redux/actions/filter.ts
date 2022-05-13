export const setFilterCase = (payload: { filterBy: string, value: string }) => {
    return { type: "SET_FILTER", payload }
}