import { Col, Container, Row } from "react-bootstrap";

const Main = () => {
  return (
    <Container>
      <Col xs={12} md={9} className="offset-md-3 mainPage">
        <Row className="row">
          <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
            <a href="alt">TRENDING</a>
            <a href="alt">PODCAST</a>
            <a href="alt">MOODS AND GENRES</a>
            <a href="alt">NEW RELEASES</a>
            <a href="alt">DISCOVER</a>
          </div>
        </Row>
        <Row className="row">
          <Col md={10}>
            <div id="searchResults" style={{ display: "none" }}>
              <h2>Search Results</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
            </div>
          </Col>
        </Row>
        <Row className="row">
          <Col xs={10} className="col-10">
            <div id="rock">
              <h2>Rock Classics</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="rockSection"
              ></div>
            </div>
          </Col>
        </Row>
        <Row className="row">
          <Col xs={10} className="col-10">
            <div id="pop">
              <h2>Pop Culture</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="popSection"
              ></div>
            </div>
          </Col>
        </Row>
        <Row className="row">
          <Col xs={10} className="col-10">
            <div id="hiphop">
              <h2>#HipHop</h2>
              <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="hipHopSection"
              ></div>
            </div>
          </Col>
        </Row>
      </Col>
    </Container>
  );
};

export default Main;
