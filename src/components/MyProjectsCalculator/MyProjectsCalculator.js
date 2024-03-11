import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from "react-i18next"
import SkillItem from '../SkillItem/SkillItem';

function MyProjectsCalculator() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [t] = useTranslation("global");

  return (
    <>
      <button className="btn-view-primary" variant="primary" onClick={handleShow}>
        {t("myProjects.view")}
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{t("myProjects.project2")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>{t("myProjects.descriptionProyect")}</p>
            <br />
            <div className='d-flex justify-content-around'>
              <SkillItem imageSrc="/images/html.webp" title="Html"  />
              <SkillItem imageSrc="/images/css.webp" title="Css"  />
              <SkillItem imageSrc="/images/javascript.webp" title="Javascript"  />
            </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn-view-secondary" variant="secondary" onClick={handleClose}>
            {t("myProjects.close")}
          </button>
          <a onClick={handleClose} variant="primary" className="btn-view-primary" href="https://js-curso-xi.vercel.app/" rel="noreferrer" target="_blank">{t("myProjects.deploy")}</a>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyProjectsCalculator