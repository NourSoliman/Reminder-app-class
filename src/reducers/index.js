// reducer = function btrg3 data `data=state`
import { ADD_REMINDER , REMOVE_REMINDER , CLEAR_REMINDER } from "../actionTypes/type"
import {bake_cookie , read_cookie} from 'sfcookies'
const reducer = (state=[], action) => {
    let reducer = []
    state = read_cookie(`reminder`)
    if(action.type === ADD_REMINDER) {
        reducer = [...state , {text : action.text , date: action.date , desc : action.desc , id: Math.random()}]
        bake_cookie(`reminder` , reducer)
        return reducer
    } else if (action.type === REMOVE_REMINDER) {
        reducer = state.filter(reminder => reminder.id !== action.id)
        bake_cookie(`reminder` , reducer)
        return reducer
    } else if (action.type === CLEAR_REMINDER) {
        reducer = []
        bake_cookie(`reminder`, reducer)
        return reducer
    }
    else {
        return state
    }
    
}
export default reducer