import { useState } from "react";

import CreatePost from "./components/create-post.component";
import PostList from "./components/post-list.component";

const App = () => {
  const [posts, setPosts] = useState([]);

  return (
    <div className="container">
      <CreatePost posts={posts} setPosts={setPosts} />
      <br />
      <br />
      <h1 className="text-center text-uppercase text-decoration-underline fw-bolder text-light p-3 rounded-3 bg-success">
        {" "}
        Earlier Posts{" "}
      </h1>
      <br />
      <PostList posts={posts} setPosts={setPosts} />
    </div>
  );
};

export default App;
