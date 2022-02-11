import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { GrEdit } from 'react-icons/gr';
import { AiFillDelete } from 'react-icons/ai'
const View = (props) => {

    const [state, setState] = useState([])
    const getData = () => {
        axios.get("http://104.251.223.235:1337/api/restaurants").then(data => {
            console.log(data["data"].data);
            setState(data["data"].data)

        }).catch(err => {
            console.log(err);
        })

    }

    useEffect(() => {

        getData();

    }, [state])


    const deleteIt = (id) => {

        axios.delete('http://104.251.223.235:1337/api/restaurants/' + id)
            .then((data) => {
                console.log(data['data'].data);
            }).catch(err => {
                console.log(err);
            })

    };
    return <div >
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.map(ele => (
                        <tr key={ele.id}>
                            <td>{ele.id}</td>
                            <td>{ele.attributes.name}</td>
                            <td>{ele.attributes.publishedAt}</td>
                            <td>{ele.attributes.updatedAt}</td>
                            <td style={{ cursor: "pointer" }} onClick={() => props.getEditData(ele)}><GrEdit /></td>
                            <td style={{ cursor: "pointer" }} onClick={() => { deleteIt(ele.id) }}><AiFillDelete /></td>
                        </tr>

                    ))
                }
            </tbody>
        </Table>
    </div>;
};

export default View;
