const initialState = { post: [], openModal: false, openComments: false };

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TWEETS":
      return { ...state, post: [...state.post, action.data] };
    case "DLT_TWEET":
      return {
        ...state,
        post: state.post.filter((item) => item !== action.data),
      };
    case "SHOW_MODAL":
      return { ...state, openModal: true };
    case "CLOSE_MODAL":
      return { ...state, openModal: false };
    case "OPEN_COMMENTS":
      return { ...state, openComments: true };
    default:
      return state;
  }
};

export default PostReducer;
