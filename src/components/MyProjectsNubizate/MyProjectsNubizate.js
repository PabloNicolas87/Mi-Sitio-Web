import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import { useTranslation } from "react-i18next"

function MyProjectsNubizate() {
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
          <Modal.Title>{t("myProjects.project1")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {t("myProjects.descriptionProyect1")}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn-view-secondary" variant="secondary" onClick={handleClose}>
            {t("myProjects.close")}
          </button>
          <a onClick={handleClose} variant="primary" className="btn-view-primary" href="https://nubizate.com/" rel="noreferrer" target="_blank">{t("myProjects.deploy")}</a>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyProjectsNubizate