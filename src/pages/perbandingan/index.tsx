import LayoutPage from "Layouts";
import TablePerbandingan from "components/TablePerbandingan";
import { Col, Container, Row } from "react-bootstrap";
import { Hoc } from "helpers/PrivateRoutes";

const PerbandinganPage = () => {
    return (
        <LayoutPage res={undefined} title="Data Training">
            <Container>
                <Row className="mb-5">
                    <Col>
                        <h1 className="text-center">Perbandingan Algoritma Support Vector Machine<br /> dan KNearest Neighbor</h1>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <TablePerbandingan />
                    </Col>
                </Row>
            </Container>
        </LayoutPage>
    )
}

export default Hoc(PerbandinganPage);