import "./PostList.scss";
import Post from "../Post/Post";

export default function PostList(props) {
  return (
    <div
      className={
        "PostList" +
        " PostList" +
        (props.theme === "light" ? "--light" : "--dark")
      }
    >
      <ul>
        {props.list.map((post, i) => (
          <li key={i}>
            <Post
              post={post}
              posts={props.list}
              setPostList={props.setPostList}
              theme={props.theme}
              setTheme={props.setTheme}
              deleteClick={(post) => props.removePost(post)}
              isLoggedIn={props.isLoggedIn}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
