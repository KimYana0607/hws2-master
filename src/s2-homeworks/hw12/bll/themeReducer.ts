import {AnyAction} from "redux";

const initState = {
    themeId: 1,
}


type ActionType = ChangeThemeIdAC

export const themeReducer = (state = initState, action: ActionType | AnyAction): any => { // fix any
    switch (action.type) {
        case ('SET_THEME_ID'):{
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}
export type ChangeThemeIdAC = {
    type: "SET_THEME_ID"
    id: number
}

export const changeThemeId = (id: number): ChangeThemeIdAC => ({ type: 'SET_THEME_ID', id }) // fix any
