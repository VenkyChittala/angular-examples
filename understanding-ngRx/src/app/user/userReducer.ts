let initialState = {
    name: '',
    email: '',
    mobile: ''
}
export function userReducer(state=initialState, action: any) {

 switch(action.type) {
    case 'name-edit': 
        return { ...state, name: action.payload}
    case 'email-edit': 
        return { ...state, name: action.payload}
    case 'mobile-edit': 
        return { ...state, name: action.payload}
    default:
        return state;
 }

}