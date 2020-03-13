const ADD_COMMENTS = "ADD_COMMENTS";
const DELETE = 'DELETE';

const initiState = {
    stored_data : [],
}
const stored_data = (state=initiState , action) => {
    switch(action.type){
        case ADD_COMMENTS :
            console.log(state,action)
            return{
                ...state,
                stored_data: [...state.stored_data, action.all]
            }
            case DELETE: 
            return{
                ...state,
                stored_data: state.stored_data.filter((e) => e.id !== action.id)
            } 
            default:
            return state
    }
}
export default stored_data