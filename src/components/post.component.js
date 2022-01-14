import { useState } from "react";

const Post = (props) => {
  const [perfect, setPerfect] = useState(false);

  const reactHandler = () => {
    setPerfect(!perfect);
  };

  const deleteHandler = () => {
    props.setPosts(props.posts.filter((p) => p.message !== props.message));
  };

  return (
    <div className="container-fluid mx-auto bg-warning mb-4 rounded-3 p-3">
      <div className="container-lg bg-white rounded border border-dark my-2">
        <p className="text-info text-wrap fw-bold fs-5 text-break">
          {" "}
          {props.message}{" "}
        </p>
        <img className="col-5" src={props.url} />
      </div>
      <div className="d-flex justify-content-evenly">
        <div className="col-5 text-center">
          <button
            className={`btn btn-md fw-bold ${
              perfect ? "bg-primary text-white" : "bg-white"
            }`}
            onClick={reactHandler}
          >
            👌 Perfect
          </button>
        </div>
        <div className="col-5 text-center">
          <button
            className="btn btn-danger btn-md fw-bold"
            onClick={deleteHandler}
          >
            🗑️ Delete
          </button>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Post;
