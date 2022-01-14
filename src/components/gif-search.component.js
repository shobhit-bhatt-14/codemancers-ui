import { GiphyFetch } from "@giphy/js-fetch-api";
import { useState } from "react";

import GifList from "./gif-list.component";

const giphy = new GiphyFetch("u9Z6IukA6YACPIqomia6dcjs9jUJSQQl");

function GifSearch(props) {
  const [text, setText] = useState("");
  const [results, setResults] = useState([]);

  const changeHandler = (e) => {
    setText(e.target.value);
  };

  const searchHandler = (e) => {
    if (text.length === 0) {
      console.log("Error");
      return;
    }

    console.log(text);

    const apiCall = async () => {
      const res = await giphy.animate(text, { limit: 15 });
      console.log(res);
      setResults(res.data);
    };

    apiCall();

    setText("");
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-evenly">
        <input
          className="col-9 rounded"
          type="text"
          value={text}
          onChange={changeHandler}
        />
        <button
          className="btn btn-light btn-sm col-2"
          type="button"
          onClick={searchHandler}
        >
          🔍
        </button>
      </div>
      <br />
      <div className="row">
        {results && <GifList gifs={results} setUrl={props.setUrl} />}
      </div>
    </div>
  );
}

export default GifSearch;
