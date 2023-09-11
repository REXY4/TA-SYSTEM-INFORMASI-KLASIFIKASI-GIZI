import React from "react";
import { faBars, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from 'react-bootstrap/Dropdown';

interface Props {
    view: any,
    onUpdate: any,
    onDelete: any
}

const ButtonDropDownComponent = ({ view, onUpdate, onDelete }: Props) => {

    return (
        <Dropdown>
            <Dropdown.Toggle variant="primary" style={{
                width: "40px"
            }} id="dropdown-basic">
                <FontAwesomeIcon icon={faBars} style={{
                    paddingRight: "20px"
                }} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {view &&
                    <>
                        <Dropdown.Item onClick={view}>View</Dropdown.Item>
                        <hr />
                    </>
                }
                {onUpdate &&
                    <>
                        <Dropdown.Item href="#">Edit</Dropdown.Item>
                        <hr />
                    </>
                }
                {onDelete &&
                    <div>
                        <Dropdown.Item onClick={onDelete}> <FontAwesomeIcon icon={faTrash} style={{
                            marginRight: "5px",
                            color: "red"
                        }} /> Delete</Dropdown.Item>
                    </div>
                }
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default ButtonDropDownComponent;