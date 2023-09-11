import LayoutPage from "Layouts";
import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import SettingUseCase from "use-case/setting.use-case";
import FormInputKnn from "./component/FormInputSvm";
import { Hoc } from "helpers/PrivateRoutes";


const AddSvmPage = () => {
    const { setLoading } = SettingUseCase();
    useEffect(() => {
        setLoading(false)
    }, []);
    return (
        <LayoutPage title={"Tambah Data Training"} res={undefined} >
            <Container>
                <Row className="mb-5">
                    <Col>
                        <h1 style={{
                            textTransform: "capitalize"
                        }}> Halaman Input algoritma K-Nearest Neighbor</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="p-4">
                            <Card.Body>
                                <FormInputKnn />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </LayoutPage>
    )
}

export default Hoc(AddSvmPage);