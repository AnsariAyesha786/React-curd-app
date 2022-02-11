import React, { useState } from 'react';
import Data from './components/Data';
import Edit from './components/Edit';
import View from './components/View';
import axios from 'axios';
import { Row, Col, Container } from 'react-bootstrap';

function App() {
  const [showEdit, setShowEdit] = useState(false);
  const [editName, setEditName] = useState({});
  // For making edit api call

  const editApiCall = (restaurant, id) => {


    // I have to make an api call in the backend

    const obj = {
      "data": {
        "name": restaurant,

      }
    }

    axios.put("http://104.251.223.235:1337/api/restaurants/" + id, obj).then(data => {


      //console.log(data["data"]);
      setShowEdit(false);


    }).catch(err => {
      console.log(err);
    })



  }

  const handleEditClose = () => {
    setShowEdit(false);
  }

  const getEditData = (data) => {
    setEditName(data);
    setShowEdit(true);
  }

  return (
    <div className="App">
      <Container>
        <Row style={{ marginTop: "70px" }}>
          <Col md={{ span: 8, offset: 2 }}>

            <Data />

          </Col>

        </Row>

        <Edit show={showEdit} handleClose={handleEditClose} data={editName} Addrestaurant={editApiCall} />

        <Row style={{ marginTop: "150px" }}>
          <Col md={{ span: 8, offset: 2 }}>

            <View getEditData={getEditData} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
