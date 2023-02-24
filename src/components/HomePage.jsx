import { Container, Row } from "react-bootstrap";
import Main from "./Main";
import Player from "./Player";
import VerticalSideBar from "./VerticalSidebar";

const HomePage = () => {
  return (
    <Container fluid>
      <Row>
        <VerticalSideBar />
        <Main />
        <Player />
      </Row>
    </Container>
  );
};

export default HomePage;
