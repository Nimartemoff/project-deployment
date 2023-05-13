import React, { useState } from 'react';
import styles from './VacancyItem.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VacancyProgressBar from './vacancyProgressBar/VacancyProgressBar'
import Modal from './modal/Modal';
import CustomModal1 from './customModal/CustomModal';
import { Button } from 'react-bootstrap';
import axios from 'axios';


const VacancyItem = (props) => {
  // Преобразуем строку в объект Date
  const date = new Date(props.VacDate);
  const formattedDate = date.toISOString().substring(0, 10);
  const functions = [
    { func_name: 'ведение реестр договоров', avt: true },
    { func_name: 'внесение заявок в с торговля ', avt: true},
    { func_name: 'внесение заявок на распределение оприходование по доставке транспортными компаниями', avt: true },
    { func_name: 'ведение реестра выставленных актов организации ', avt: false },
    { func_name: 'ведение путевых листов ', avt: false }
  ];
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const avt = (props.Avt*100).toFixed(2);

  return (
    <div className={`col-md-6 col-lg-4 ${styles.card}`}>
      <div className={`card h-100 ${styles.card}`}>
        <img src={props.src} className={`card-img-top ${styles.image}`} alt="" />
        <div className={`card-body ${styles.body}`}>
          <h5 className={`card-title ${styles.title}`}>{props.VacName}</h5>
          <p className={`card-text ${styles.text}`}>{props.CompName}</p>
        </div>
        <VacancyProgressBar Avt={avt} />
        <div className={`card-footer ${styles.footer}`}>
          <Button variant="dark" onClick={handleShow} className="btn-block">
            Подробнее
          </Button>
 {/*         <small className={`text-body-secondary ${styles.date}`}>{formattedDate}</small>  */}
          <Modal show={showModal} handleClose={handleClose} title={props.VacName} name={props.CompName} avt={avt}  id={props.id}>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default VacancyItem;