import Axios from "axios"

export const setComments = (comments) =>{
    return {
        type : 'SET_COMMENTS',
        payload : comments
    }
}
export const startSetComments = () => {
    return (dispatch) =>{
        Axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(response =>{
            const comments = response.data
            dispatch(setComments(comments))
        })
    }
}