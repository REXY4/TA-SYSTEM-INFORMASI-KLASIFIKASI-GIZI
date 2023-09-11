import LayoutPage from "Layouts";
import { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import SettingUseCase from "use-case/setting.use-case";
import FormInput from "./component/FormInput";
import { Hoc } from "helpers/PrivateRoutes";
const AddTraingingPage = () => {
    const { setLoading } = SettingUseCase();
    useEffect(() => {
        setLoading(false)
    }, []);
    return (
        <LayoutPage title={"Tambah Data Training"} res={undefined} >
            <Container>
                <Row className="mb-5">
                    <Col>
                        <h1>Halaman Input Data Training</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="p-4">
                            <Card.Body>
                                <FormInput />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </LayoutPage>
    )
}

export default Hoc(AddTraingingPage);