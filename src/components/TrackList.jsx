import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { viewArtistAction } from "../action";

const TrackList = (props) => {
  const seeAlbum = useSelector((state) => state.album);
  const goArtist = useDispatch();
  const [getTrackList, setGetTrackList] = useState([]);

  const idAlbum = seeAlbum.map((el) => {
    return el.album.id;
  });

  useEffect(() => {
    getTracks();
  }, []);

  const getTracks = async () => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" + idAlbum
      );
      if (res.ok) {
        let data = await res.json();
        setGetTrackList(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Col className="col-12 col-md-9 offset-md-3 mainPage">
      <Row className="row mb-3">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="a">TRENDING</a>
          <a href="a">PODCAST</a>
          <a href="a">MOODS AND GENRES</a>
          <a href="a">NEW RELEASES</a>
          <a href="a">DISCOVER</a>
        </div>
      </Row>
      <Row className="row">
        <Col className="col-md-3 pt-5 text-center" id="img-container">
          {seeAlbum.map((el) => {
            return (
              <div
                className="d-flex flex-column justify-content-center align-items-center"
                key={el.id}
              >
                <img src={el?.album.cover_medium} alt="" />
                <p className="mt-4 fw-bold text-white">{el.album.title}</p>
                <Link
                  onClick={() => goArtist(viewArtistAction(props))}
                  to={"/artist"}
                  className="text-white text-decoration-none"
                >
                  {el.artist.name}
                </Link>
                <button
                  id="btnPlay"
                  className="btn btn-success mt-3"
                  type="button"
                >
                  Play
                </button>
              </div>
            );
          })}
        </Col>
        <Col className="col-md-8 p-5">
          <Row className="row">
            <div className="col-md-10 mb-5" id="trackList">
              {getTrackList?.tracks?.data?.map((el, i) => {
                return (
                  <div className="d-flex justify-content-between" key={i}>
                    <p className="text-white mt-3">{el.title}</p>
                    <p className="text-white">
                      {Math.floor(
                        parseInt(el.duration) / 60 // setting the duration minutes
                      )}
                      :
                      {parseInt(el.duration) % 60 < 10
                        ? "0" + (parseInt(el.duration) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
                        : parseInt(el.duration) % 60}
                    </p>
                  </div>
                );
              })}
            </div>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default TrackList;
