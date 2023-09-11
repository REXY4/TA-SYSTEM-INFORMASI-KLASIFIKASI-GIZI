import Spinner from 'react-bootstrap/Spinner';

function LoadingSpinners() {
    return (
        <Spinner animation="border" variant="danger">
            <span className="">Loading...</span>
        </Spinner>
    );
}

export default LoadingSpinners;