import LayoutPage from "Layouts"
import { Button, Col, Container, Row } from "react-bootstrap";
import TableDataTraining from "../../components/TableDataTraining";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import SettingUseCase from "use-case/setting.use-case";
import { useEffect, useState } from "react";
import SvmUseCase from "use-case/svm";
import { Hoc } from "helpers/PrivateRoutes";

const SvmPage = () => {
    const router = useRouter();
    const [page] = useState<number>(0)
    const { setLoading } = SettingUseCase();
    const { svmData, getAllSvm } = SvmUseCase();

    useEffect(() => {
        setLoading(false)
        getAllSvm();
    }, []);
    return (
        <LayoutPage res={undefined} title="Data Training">
            <Container>
                <Row className="mb-5">
                    <Col>
                        <h1>Klasifikasi Support Vector Machine</h1>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col className="d-flex justify-content-end">
                        <Button variant="success" onClick={() => {
                            setLoading(true)
                            router.push("/svm/add")
                        }}><FontAwesomeIcon icon={faPlus} style={{ marginRight: "10px" }} />Tambah</Button>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <TableDataTraining data={svmData} page={page} type="svm" />
                    </Col>
                </Row>
            </Container>
        </LayoutPage>
    )
}

export default Hoc(SvmPage);