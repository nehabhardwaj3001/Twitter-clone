import { addTweets, ADD_TWEETS } from "../actions/PostAction";

const initialState = { post: [] }

const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TWEETS":
            console.log(action)
            return { ...state, post: action.data };
        default:
            return {
                state
            };
    };
}

export default PostReducer;