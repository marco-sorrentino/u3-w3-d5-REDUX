import { Link } from "react-router-dom";

const AlbumCard = (props) => {
  return (
    <div className="col text-center">
      <a href=".">
        <img className="img-fluid" src={props.cover} alt="1" />
      </a>
      <p>
        <Link to={"/album"}> Album: {props.album} </Link>
        <br />

        <a href="/artist_page.html?id=${songInfo.artist.id}">
          Artist: {props.artist}
        </a>
      </p>
    </div>
  );
};

export default AlbumCard;
