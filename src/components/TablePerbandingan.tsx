import Table from 'react-bootstrap/Table';
import KnnUseCase from 'use-case/knn';
import SvmUseCase from 'use-case/svm';

function TablePerbandingan() {
    const { svmData } = SvmUseCase();
    const { knnData } = KnnUseCase();

    const result = [];

    for (const knnItem of knnData) {
        // Cari item dengan nama yang sama di dalam array `svm`
        const svmItem = svmData.find((item) => item.nama === knnItem.nama);

        // Jika item dengan nama yang sama ditemukan di dalam `svm`, tambahkan ke array `dataSama`
        if (svmItem) {
            result.push({
                nama: knnItem.nama,
                svm: svmItem.klasifikasi,
                knn: knnItem.klasifikasi
            });
        }
    }
    return (
        <Table striped bordered hover variant="light">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Data Testing</th>
                    <th>Svm</th>
                    <th>K-NN</th>
                </tr>
            </thead>
            <tbody>
                {result.map((item: any, index: number) => {
                    return (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{item.nama}</td>
                            <td>{item.svm}</td>
                            <td>{item.knn}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
}

export default TablePerbandingan;