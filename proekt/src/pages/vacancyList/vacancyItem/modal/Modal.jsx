import React from 'react';
import styles from "./Modal.module.css";
import { Modal, Button } from 'react-bootstrap';
import CircleProgressBar from '../circleProgressBar/CircleProgressBar';
import { useState, useEffect } from 'react';

import axios from 'axios';


const CustomModal = ({show, handleClose, title, data, id, avt }) => {


  const [loading, setLoading] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:3001/vacancy/${id}`);
        setModalData(response.data[0]);
        console.log(response.data[0]);
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

  const date = new Date(modalData?.date);
  const avtFunctions = modalData?.functions.filter(f => f.avt).map(f => f.func_name);
  const formattedDate = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;

  return (
    <>
    {loading && <p>Loading...</p>}
    {modalData && (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.Main}>
        <CircleProgressBar percentage={parseFloat(avt)}/>
          <div>
              <p>Автоматизируемые обязанности:</p>
              {modalData?.functions.map(func => <div key={func} style={{ color: "black" }}>{func}</div>)}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <p>{formattedDate}</p>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
  )}
  </>
)}

export default CustomModal;