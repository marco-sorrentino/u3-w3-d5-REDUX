import { Container, Row } from "react-bootstrap";
import VerticalSideBar from "./VerticalSidebar";

const HomePage = () => {
  return (
    <Container fluid>
      <Row>
        <VerticalSideBar />
      </Row>
    </Container>
  );
};

export default HomePage;
