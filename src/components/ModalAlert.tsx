import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SettingUseCase from 'use-case/setting.use-case';

function ModalAlert() {
    const { alert, setAlert } = SettingUseCase()
    const router = useRouter();
    const handleClose = () => {
        router.back()
        setAlert("", false, 0)
    }
    return (
        <>
            <Modal show={alert.open} animation={true}>
                <Modal.Body>
                    <h6 className='text-center' style={{
                        color: "#151515"
                    }}> {alert.message}</h6>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-center'>
                    <Button variant="success" onClick={() => handleClose()}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalAlert;