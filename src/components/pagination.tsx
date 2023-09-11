import Pagination from 'react-bootstrap/Pagination';

interface Props {
    count: number,
    limit: number,
    setPage: any,
    setOffset: any
}

const PaginationTable: React.FC<Props> = ({ count, limit, setPage, setOffset }) => {
    let Items = [];

    const handleChangeData = (value: number) => {
        setPage((value - 1) * 10);
        setOffset((value) * 10)
    }


    const limits = limit === 0 ? 10 : limit;

    for (let i = 1; i <= Math.ceil(count / limits); i++) {
        Items.push(
            <Pagination.Item onClick={() => handleChangeData(i)}>{i}</Pagination.Item>
        );
    }
    return (
        <Pagination>
            {/* <Pagination.First />
            <Pagination.Prev /> */}
            {Items}
            {/* <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item disabled>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item> */}
            {/* <Pagination.Next />
            <Pagination.Last /> */}
        </Pagination>
    );
}

export default PaginationTable;