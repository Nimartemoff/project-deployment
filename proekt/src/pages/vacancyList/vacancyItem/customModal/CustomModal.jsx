import React, { useState, useEffect } from 'react';

import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

const CustomModal1 = ({ show, handleClose, title, date, data, src, id }) => {
  const [loading, setLoading] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:3001/vacancy/${id}`);
        setModalData(response.data[0]);
      } catch (error) {
        console.log(error);
        // handle error
      } finally {
        setLoading(false);
      }
    };

    if (show) {
      fetchData();
    }
  }, [show, data]);

  return (
    <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {loading && <p>Loading...</p>}
        {modalData && (
          <div>
            <p>Date: {modalData.date}</p>
            <p>Description: {modalData.description}</p>
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>

    
  );
};

export default CustomModal1;