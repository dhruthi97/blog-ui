const commentsInitialState = 0

const commentsReducer = (state = commentsInitialState,action) => {
    switch(action.type){
        case 'SET_COMMENTS' : {
            return [].concat(action.payload)
        }
        default : {
            return [].concat(state)
        }
    }
} 
export default commentsReducer