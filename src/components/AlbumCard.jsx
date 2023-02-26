import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const AlbumCard = (props) => {
  const dispatch = useDispatch();
  const artist = useDispatch();
  return (
    <div className="col text-center">
      <a href=".">
        <img className="img-fluid" src={props.cover} alt="1" />
      </a>
      <p>
        <Link
          className="text-decoration-none"
          onClick={() =>
            dispatch({
              type: "VIEW_ALBUM",
              payload: props.obj,
            })
          }
          to={"/album"}
        >
          {" "}
          Album: {props.album}{" "}
        </Link>
        <br />

        <Link
          onClick={() =>
            artist({
              type: "VIEW_ARTIST",
              payload: props.obj,
            })
          }
          className="text-decoration-none"
          to={"/artist"}
        >
          Artist: {props.artist}
        </Link>
      </p>
    </div>
  );
};

export default AlbumCard;
