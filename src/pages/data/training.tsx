import LayoutPage from "Layouts"
import { Button, Col, Container, Row } from "react-bootstrap";
import TableDataTraining from "../../components/TableDataTraining";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import SettingUseCase from "use-case/setting.use-case";
import { useEffect, useState } from "react";
import DataTrainingUseCase from "use-case/dataTraining-use-case";
import PaginationTable from "components/pagination";
import { Hoc } from "helpers/PrivateRoutes";

const DataTrainginPage = () => {
    const router = useRouter();
    const { setLoading } = SettingUseCase();
    const [page, setPage] = useState<number>(0);
    const [offsetData, setOffsetData] = useState<number>(10)
    const { dataTraining, getAllDataTraining } = DataTrainingUseCase();
    useEffect(() => {
        getAllDataTraining();
        // setLoading(false)
    }, []);

    console.log("ini page ", offsetData)

    return (
        <LayoutPage res={undefined} title="Data Training">
            <Container>
                <Row className="mb-5">
                    <Col>
                        <h1>Data Training</h1>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col className="d-flex justify-content-end">
                        <Button variant="success" onClick={() => {
                            setLoading(true)
                            router.push("/data/add")
                        }}><FontAwesomeIcon icon={faPlus} style={{
                            marginRight: "10px",
                            width: "15px",
                            height: "15px"
                        }} />Tambah</Button>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <TableDataTraining data={dataTraining.slice(page, offsetData)} page={page} type="Training" />
                    </Col>
                </Row>
                {dataTraining.length >= 10 &&
                    <Row>
                        <Col className="d-flex justify-content-center mt-5">
                            <PaginationTable count={dataTraining.length} limit={10} setPage={setPage} setOffset={setOffsetData} />
                        </Col>
                    </Row>
                }
            </Container>
        </LayoutPage>
    )
}

export default Hoc(DataTrainginPage);