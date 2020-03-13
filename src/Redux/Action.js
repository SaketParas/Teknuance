const ADD_COMMENTS = 'ADD_COMMENTS';
const DELETE = 'DELETE';


const company_data = (action_data) => {
    console.log(action_data)
    return{
        type: ADD_COMMENTS,
          all :action_data 
        }
}
const remove = (e) => {
    return {
        type:DELETE,
        id:e
    }
 }

export {company_data,remove}