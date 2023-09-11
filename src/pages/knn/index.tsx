import LayoutPage from "Layouts"
import { Button, Col, Container, Row } from "react-bootstrap";
import TableDataTraining from "../../components/TableDataTraining";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import SettingUseCase from "use-case/setting.use-case";
import { useEffect, useState } from "react";
import KnnUseCase from "use-case/knn";
import { Hoc } from "helpers/PrivateRoutes";

const KnnPage = () => {
    const router = useRouter();
    const { setLoading } = SettingUseCase();
    const [page] = useState<number>(0)
    const { getAllKnn, knnData } = KnnUseCase();

    useEffect(() => {
        setLoading(false)
        getAllKnn();
    }, []);

    return (
        <LayoutPage res={undefined} title="Data Training">
            <Container>
                <Row className="mb-5">
                    <Col>
                        <h1>Klasifikasi K-Nearest Neighbor</h1>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col className="d-flex justify-content-end">
                        <Button variant="success" onClick={() => {
                            setLoading(true)
                            router.push("/knn/add")
                        }}><FontAwesomeIcon icon={faPlus} style={{ marginRight: "10px" }} />Tambah</Button>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <TableDataTraining data={knnData} page={page} type="Knn" />
                    </Col>
                </Row>
            </Container>
        </LayoutPage>
    )
}

export default Hoc(KnnPage);