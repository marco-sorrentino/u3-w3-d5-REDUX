import { Col, Row } from "react-bootstrap";

export const TrackList = (props) => {
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
        <Col className="col-md-3 pt-5 text-center" id="img-container"></Col>
        <Col className="col-md-8 p-5">
          <Row className="row">
            <div className="col-md-10 mb-5" id="trackList"></div>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};
