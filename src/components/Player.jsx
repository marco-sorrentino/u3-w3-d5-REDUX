import { Container, Row, Col } from "react-bootstrap";

const Player = () => {
  return (
    <Container fluid className=" fixed-bottom bg-container pt-1">
      <Row className="row">
        <Col lg={10} className="offset-lg-2">
          <Row className="row">
            <Col
              xs={6}
              md={4}
              lg={2}
              className="offset-3 offset-md-4 offset-lg-5 playerControls mt-1"
            >
              <Row className="row">
                <a href="alt">
                  <img src="playerbuttons/Shuffle.png" alt="shuffle" />
                </a>
                <a href="alt">
                  <img src="playerbuttons/Previous.png" alt="shuffle" />
                </a>
                <a href="alt">
                  <img src="playerbuttons/Play.png" alt="shuffle" />
                </a>
                <a href="alt">
                  <img src="playerbuttons/Next.png" alt="shuffle" />
                </a>
                <a href="alt">
                  <img src="playerbuttons/Repeat.png" alt="shuffle" />
                </a>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center playBar py-3">
            <Col xs={8} md={6} className="">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
