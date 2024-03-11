import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from "react-i18next"
import SkillItem from '../SkillItem/SkillItem';


function MyProjectsEcommerce() {
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
          <Modal.Title>{t("myProjects.project3")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {t("myProjects.descriptionProyect3")}
            <br />
            <div className='d-flex justify-content-around'>
              <SkillItem imageSrc="/images/react.webp" title="React"  />
              <SkillItem imageSrc="/images/firebase.webp" title="Firebase"  />
            </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn-view-secondary" variant="secondary" onClick={handleClose}>
            {t("myProjects.close")}
          </button>
          <a onClick={handleClose} variant="primary" className="btn-view-primary" href="https://react-curso-alpha.vercel.app/" rel="noreferrer" target="_blank">{t("myProjects.deploy")}</a>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyProjectsEcommerce