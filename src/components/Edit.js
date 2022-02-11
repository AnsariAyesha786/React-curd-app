import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


const Edit = ({ handleClose, Addrestaurant, show, data }) => {
    const [name, setName] = useState("");

    const handleChange = (event) => {

        setName(event.target.value); // We are setting in state 

    }


    const saveData = (id) => {

        Addrestaurant(name, id);

        /// We have to call some method to save the data in the api
    }

    return <>


        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Restaurant</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" value={name} onChange={handleChange} />
                    </Form.Group>

                </Form>


            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => saveData(data.id)}>
                    Edit Changes
                </Button>
            </Modal.Footer>
        </Modal>
    </>;
};

export default Edit;
