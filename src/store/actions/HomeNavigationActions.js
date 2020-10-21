import actions from './actions'

export const setFormVisible = params => {
    return {
        type: actions.SET_FORM_VISIBLE,
        payload: params
    }
}
