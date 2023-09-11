import { DataTrainingEntity } from 'entities/dataTraingin.entity';
import Table from 'react-bootstrap/Table';
import ButtonDropDownComponent from './ButtonDropDown';
import ModalDelete from './ModalDelete';
import { useState } from 'react';
import axios from 'axios';
import ModalSuccess from './ModalSuccess';
import DataTrainingUseCase from 'use-case/dataTraining-use-case';
import KnnUseCase from 'use-case/knn';
import SvmUseCase from 'use-case/svm';

interface Props {
    data: Array<DataTrainingEntity> | []
    page: number,
    type: string
}

function TableDataTraining({ data, page, type }: Props) {
    const { getAllDataTraining } = DataTrainingUseCase();
    const { getAllKnn } = KnnUseCase();
    const { getAllSvm } = SvmUseCase();
    const [idUser, setUserId] = useState<number>(0);
    const [alertData, setAlertData] = useState({
        message: "",
        open: false,
    })

    const [modalSuccess, setModalSuccess] = useState({
        message: "",
        open: false
    });

    const handleModal = (open: boolean, name: string, id: number) => {
        setAlertData({
            ...alertData,
            message: `Apakah anda yakin untuk menghapus data ${name} ?`,
            open: open
        })
        setUserId(id);
    }


    const handleDelete = async () => {
        try {
            const config = {
                headers: {
                    "Content-Type": "Application/Json",
                    Authorization: `Bearer ${sessionStorage.getItem("_token")}`,
                    "ngrok-skip-browser-warning": "69420"
                }
            };
            const response = await axios.delete(`${process.env.NEXT_PUBLIC_APP_API_ADMIN}/${type == "Training" ? "training" : type == "Knn" ? "knn" : "svm"}/${idUser}`, config);
            if (response.data.statusCode == 200) {
                setModalSuccess({
                    message: `Delete Data ${type == "Training" ? "training" : type == "Knn" ? "knn" : "svm"} Success !`,
                    open: true
                })
                setAlertData({
                    open: false,
                    message: `Delete Data ${type == "Training" ? "training" : type == "Knn" ? "knn" : "svm"} Success !`,
                })
                getAllDataTraining()
                getAllKnn()
                getAllSvm()
            } else {
                setModalSuccess({
                    message: `Delete Data ${type == "Training" ? "training" : type == "Knn" ? "knn" : "svm"} Gagal !`,
                    open: true
                })
                setAlertData({
                    open: false,
                    message: ""
                })
            }
        } catch (err) {
            setModalSuccess({
                message: `Delete Data ${type == "Training" ? "training" : type == "Knn" ? "knn" : "svm"} Gagal !`,
                open: true
            })
            setAlertData({
                open: false,
                message: ""
            })
        }
    }

    return (
        <>
            <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Jk</th>
                        <th>Usia</th>
                        <th>Berat</th>
                        <th>Tinggi</th>
                        <th>Klasifikasi</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data !== undefined && data.map((item: DataTrainingEntity, index: number) => {
                        return (
                            <tr>
                                <td>{(index + 1 + page)}</td>
                                <td>{item.nama}</td>
                                <td>{item.gender}</td>
                                <td>{item.usia} Tahun</td>
                                <td>{item.berat} kg</td>
                                <td>{item.tinggi} cm</td>
                                <td>{item.klasifikasi}</td>
                                <td className='d-flex justify-content-center'><ButtonDropDownComponent view={undefined} onUpdate={undefined} onDelete={() => handleModal(true, item.nama, item.id)} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            <ModalDelete message={alertData.message} show={alertData.open} setShow={setAlertData} onClick={handleDelete} />
            <ModalSuccess message={modalSuccess.message} show={modalSuccess.open} setShow={setModalSuccess} onClick={() => {
                setModalSuccess({ open: false, message: "" })
                setAlertData({ open: false, message: "" })
            }} />
        </>
    );
}

export default TableDataTraining;