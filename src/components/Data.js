import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const Data = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (event) => {

        setName(event.target.value);

    }
    const Addrestaurant = (name) => {
        const obj = {
            data: {
                name: name
            }
        }
        axios.post("http://104.251.223.235:1337/api/restaurants", obj).then(data => {
            console.log(data["data"]);
            setShow(false);
        }).catch(err => {
            console.log(err);
        })



    }
    const Savedata = () => {
        Addrestaurant(name)
    }

    return (
        <>

            <Button variant="primary" onClick={handleShow}>
                Add Data
            </Button>



            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" onChange={handleChange} />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={Savedata}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}








export default Data;
