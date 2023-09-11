import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface Props {
    message: string,
    show: boolean
    setShow: any
    onClick: any
}

const ModalDelete: React.FC<Props> = ({ setShow, show, message, onClick }) => {
    const handleClose = () => setShow({
        open: false
    });
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body><h6 className='text-center' style={{
                    color: "#151515"
                }}>{message}</h6></Modal.Body>
                <Modal.Footer className="d-flex justify-content-between">
                    <Button variant="secondary" onClick={handleClose}>
                        Tidak
                    </Button>
                    <Button variant="primary" onClick={onClick}>
                        Ya
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDelete;