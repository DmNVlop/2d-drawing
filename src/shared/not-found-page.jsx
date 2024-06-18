import { Link } from "react-router-dom";
import "./not-found-page.css";
import { Button, Col, Flex, Row } from "antd";

function NotFoundPage() {
  return (
    <>
      <div id="not-found-page">
        <Flex
          style={{ width: "100%", height: "100vh" }}
          justify={"center"}
          align={"center"}
        >
          <Flex vertical={true} align="center">
            <h1>UPs, No encontrado...</h1>

            <Row gutter={[16]}>
              <Col className="gutter-row">
                <Link to="/" className="gu">
                  <Button>Inicio</Button>
                </Link>
              </Col>

              <Col className="gutter-row">
                <Link to="/countertop">
                  <Button>Countertops</Button>
                </Link>
              </Col>
            </Row>
          </Flex>

          <Flex vertical={true} align="center">
            <figure className="not-found">
              <img src="/images/not-found.jpeg" alt="Pagina no encontrada" />
            </figure>
          </Flex>
        </Flex>
      </div>
    </>
  );
}

export default NotFoundPage;
