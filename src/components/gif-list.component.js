const GifList = (props) => {
  const items = props.gifs.map((g) => {
    return <Item key={g.id} url={g.url} setUrl={props.setUrl} />;
  });

  return <div> {items} </div>;
};

const Item = (props) => {
  const gifHandler = () => {
    props.setUrl(props.url);
    console.log("clicked !!");
  };

  return (
    <a onClick={gifHandler} href="#">
      <img className="col-4" src={props.url} alt="style" />
    </a>
  );
};

export default GifList;
