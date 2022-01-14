import { useState } from "react";

import GifSearch from "./gif-search.component";

const CreatePost = (props) => {
  const [message, setMessage] = useState("");
  const [url, setUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [bgd, setBGD] = useState(false);

  const gifSwitch = () => {
    setOpen(!open);

    setBGD(!bgd);
  };

  const changeHandler = (e) => {
    setMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (message.length === 0 && url.length === 0) {
      return;
    }

    setOpen(false);
    setBGD(false);

    const obj = {
      message: message,
      url: url,
    };

    props.setPosts([...props.posts, obj]);

    setMessage("");
    setUrl("");
  };

  return (
    <form
      className="col-md-5 pt-4 border border-secondary border-2 rounded mx-auto bg-secondary"
      onSubmit={submitHandler}
    >
      <div className="row col-11 mx-auto">
        <textarea
          className="col-12 form-control bg-white border-0 text-wrap text-break"
          name="message"
          rows="5"
          placeholder="Type..."
          value={message}
          onChange={changeHandler}
        ></textarea>

        <img className="col-4" src={url} />
      </div>
      <br />
      <div className="col-11 mx-auto d-flex justify-content-evenly bg-secondary p-2 rounded">
        <div className="col-xxl-4 my-auto text-center">
          <a
            className={`text-decoration-none p-2 rounded ${
              bgd ? "bg-danger" : "bg-light"
            }`}
            onClick={gifSwitch}
          >
            <strong className="user-select-none">👾 GIF</strong>
          </a>
        </div>
        <div className="col-lg-4 text-center">
          <button
            type="submit"
            className="btn btn-primary fw-bold col-xl-5 border border-white border-2"
          >
            Post
          </button>
        </div>
      </div>
      <br />
      <div className="col-md-10 mx-auto">
        {open && <GifSearch setUrl={setUrl} />}
      </div>
    </form>
  );
};

export default CreatePost;
