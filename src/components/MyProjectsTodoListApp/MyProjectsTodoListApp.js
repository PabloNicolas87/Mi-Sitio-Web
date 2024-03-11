import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from "react-i18next"
import SkillItem from '../SkillItem/SkillItem';

function MyProjectsTodoListApp() {
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
          <Modal.Title>{t("myProjects.project4")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {t("myProjects.descriptionProyect4")}
            <br />
            <SkillItem imageSrc="/images/angular.webp" title="Angular"  />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn-view-secondary" variant="secondary" onClick={handleClose}>
            {t("myProjects.close")}
          </button>
          <a onClick={handleClose} variant="primary" className="btn-view-primary" href="https://to-do-list-app-psi.vercel.app/" rel="noreferrer" target="_blank">{t("myProjects.deploy")}</a>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyProjectsTodoListApp