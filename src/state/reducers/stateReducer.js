import Actions from "../Actions/Actions";

function stateReducer(state, action) {
  switch (action.type) {
    case Actions.addPost:
      return { ...state, posts: [...state.posts, action.payload.post] };

    case Actions.addPosts:
      return { ...state, posts: [...state.posts, ...action.payload.posts] };

    case Actions.setTheme:
      return { ...state, theme: action.payload.theme };

    case Actions.toggleTheme:
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };

    case Actions.loginUser:
      return { ...state, isLoggedIn: true };

    case Actions.removePost:
      let idx = state.posts.indexOf(action.payload.post);
      let newPosts = state.posts.filter((el, i) => idx !== i);
      return { ...state, posts: [...newPosts] };

    case Actions.editPost:
      const editedPosts = [...state.posts].map((p, i) => {
        if (state.posts.indexOf(action.payload.post) === i) {
          return action.payload.editedPost;
        }
        return p;
      });
      return { ...state, posts: [...editedPosts] };

    case Actions.searching:
      return {
        ...state,
        isSearching: true,
        searchList: [...action.payload.searchedList],
      };

    case Actions.setFiltered:
      return {...state, searchList: action.payload.searchedList};

    case Actions.endSearch:
      return { ...state, isSearching: false };

    case Actions.addCommentToPost:
      console.log(action.payload.comments);
      let newPost = {
        ...action.payload.post,
        comments: [...action.payload.comments, action.payload.comment],
      };
      idx = action.payload.posts.indexOf(action.payload.post);
      const commentedPosts = [...action.payload.posts].map((p, i) => {
        if (idx === i) {
          return newPost;
        }
        return p;
      });

      return {...state, posts: [...commentedPosts]};

    default:
      return state;
  }
}

export default stateReducer;
