const initialState = { post: [] }

const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TWEETS":
            return { ...state, post: [...state.post, action.data] };
        case "DLT_TWEET" :
            return {...state, post: state.post.filter(item => item !== action.data)}
        default:
            return state
    };
}

export default PostReducer;