import actions from './actions'

export const setPage = params => {
    return {
        type: actions.SET_PAGE,
        payload: params.page
    }
}
