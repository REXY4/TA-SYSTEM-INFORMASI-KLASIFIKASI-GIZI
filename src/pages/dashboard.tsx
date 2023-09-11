import { faCalendarDays, faTable } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from 'Layouts';
import { Card, Col, Container, Row } from 'react-bootstrap';
import styles from "./dashboard.module.css";
import { useRouter } from 'next/router';
import SettingUseCase from 'use-case/setting.use-case';
import { Hoc } from 'helpers/PrivateRoutes';

const Home = () => {
  const router = useRouter();
  const { setLoading } = SettingUseCase();
  const handleNext = (url: string) => {
    setLoading(true);
    router.push(url)
  }
  return (
    <Layout res={undefined} title="Home">
      <Container>
        <Row className='mb-4'>
          <Col>
            <h1>Dashboard</h1>
          </Col>
        </Row>
        <Card>
          <Card.Body>
            <Row className="mt-4">
              <h3 style={{
                textAlign: "center",
                textTransform: "uppercase",
                color: "#151515"
              }}>
                Selamat Datang di System Informasi Status Gizi pada balita <br />
                di puskesmas Lubuk panai</h3>
            </Row>
            <Container className="mb-5">
              <Row className="mt-5">
                <Col className='col-md-4 d-flex justify-content-center'>
                  <Card
                    onClick={() => handleNext("/data/training")}
                    className={`${styles["button-dashboard"]}`} style={{
                      width: "280px",
                      background: "#674188",
                      color: "white"
                    }}>
                    <Card.Body className='d-flex justify-content-evenly'>
                      <FontAwesomeIcon style={{
                        width: "50px",
                        height: "50px"
                      }} icon={faCalendarDays} />
                      <p style={{
                        fontSize: "21px",
                        fontWeight: "bold",
                        color: "white",
                        paddingTop: "15px"
                      }}>Data Training</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className='col-md-4 d-flex justify-content-center'>
                  <Card
                    onClick={() => handleNext("/svm")}
                    className={`${styles["button-dashboard"]}`}
                    style={{
                      width: "280px",
                      background: "#674188",
                      color: "white"
                    }}>
                    <Card.Body className='d-flex justify-content-evenly'>
                      <FontAwesomeIcon style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "5px"
                      }} icon={faTable} />
                      <p style={{
                        fontSize: "21px",
                        fontWeight: "bold",
                        color: "white",
                        paddingTop: "15px"
                      }}>Algoritma SVM</p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className='col-md-4 d-flex justify-content-center'>
                  <Card
                    onClick={() => handleNext("/knn")}
                    className={`${styles["button-dashboard"]}`}
                    style={{
                      width: "280px",
                      background: "#674188",
                      color: "white"
                    }}>
                    <Card.Body className='d-flex justify-content-evenly'>
                      <FontAwesomeIcon style={{
                        width: "50px",
                        height: "50px"
                      }} icon={faTable} />
                      <p style={{
                        fontSize: "21px",
                        fontWeight: "bold",
                        color: "white",
                        paddingTop: "15px"
                      }}>Algoritma K-NN</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Container>
    </Layout>
  );
};
export default Hoc(Home);
