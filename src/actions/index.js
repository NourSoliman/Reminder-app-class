import { ADD_REMINDER, REMOVE_REMINDER , CLEAR_REMINDER } from "../actionTypes/type";
export const add_Reminder = (text , date ,desc) => {
    const action = {
        type : ADD_REMINDER,
        text : text,
        desc: desc,
        date: date
    }
    console.log(action);
    return action
}
export const remove_Reminder = (id) => {
    const action = {    
        type : REMOVE_REMINDER,
        id
    }
    console.log(action);
    return action
}
export const clear_Reminder = () => {
    const action = {
        type:CLEAR_REMINDER,
    }
    return action
}