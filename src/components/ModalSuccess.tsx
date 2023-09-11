import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface Props {
    message: string,
    show: boolean
    setShow: any
    onClick: any
}

const ModalSuccess: React.FC<Props> = ({ setShow, show, message, onClick }) => {
    const handleClose = () => setShow({
        open: false
    });
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body><h6 className='text-center' style={{
                    color: "#151515"
                }}>{message}</h6></Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                    <Button variant="success" onClick={onClick}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalSuccess;