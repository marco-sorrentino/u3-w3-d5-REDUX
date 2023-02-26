import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const ArtistPage = (props) => {
  const seeArtist = useSelector((state) => state.artist);
  const [name, setName] = useState([]);

  const artistName = seeArtist?.map((el) => {
    return el.artist.name;
  });

  useEffect(() => {
    getArtist();
  }, []);

  const getArtist = async () => {
    try {
      let res = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName
      );
      if (res.ok) {
        let data = await res.json();
        let canzoni = data.data;
        setName(canzoni);
        console.log(canzoni);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row mb-3">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>

      <Row className="row">
        <div className="col-12 col-md-10 col-lg-10 mt-5">
          {seeArtist?.map((el) => {
            return (
              <div key={el.id}>
                <h2 className="titleMain">{el.artist.name}</h2>
                <p className="fs-5" id="followers">
                  {el.rank} Followers
                </p>
              </div>
            );
          })}

          <div className="d-flex justify-content-center" id="button-container">
            <Button
              variant="success"
              className="btn btn-success me-3 mainButton"
              id="playButton"
            >
              PLAY
            </Button>
            <Button
              className="btn btn-outline-light ms-3 mainButton"
              id="followButton"
            >
              FOLLOW
            </Button>
          </div>
        </div>
      </Row>
      <Row className="row mb-3">
        <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
          <div className="mt-4 d-flex justify-content-start">
            <h2 className="text-white font-weight-bold">Tracks</h2>
          </div>
          <Container className="pt-5 mb-5">
            <Row className="row" id="apiLoaded">
              {name.map((el, i) => {
                return (
                  <Col className="" key={i}>
                    <img src={el.album.cover_medium} alt="" />
                    <p className="text-white">Track: {el.title}</p>
                    <p className="text-white">Album: {el.album.title}</p>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </Row>
    </Container>
  );
};

export default ArtistPage;
