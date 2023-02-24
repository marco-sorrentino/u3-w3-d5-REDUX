const AlbumCard = (props) => {
  return (
    <div class="col text-center">
      <a href=".">
        <img class="img-fluid" src={props.cover} alt="1" />
      </a>
      <p>
        <a href="alt">
          Album: {props.album}
          <br />
        </a>
        <a href="/artist_page.html?id=${songInfo.artist.id}">
          Artist: {props.artist}
        </a>
      </p>
    </div>
  );
};

export default AlbumCard;
