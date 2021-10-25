import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import ResumeList from './ResumeList';
import Modal from 'react-modal';

const Resume = () => {
  const {fields} = useSelector(state => state.info);
  const [fieldsArray, setFieldsArray] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (fields) {
      const fieldsArray = Object.keys(fields).map(key => {
        return {
          key: key,
          value: fields[key]
        }
      });
      setFieldsArray(fieldsArray);
    }
  }, [fields])

  return (
    <>
      <div className="wizard-resume">
        <div className="wizard-resume-header">
          <h2>Resumen</h2>
        </div>
        <div className="wizard-resume-content">

          <ResumeList values={fieldsArray} />

        </div>
      </div>
      <div className="wizard-resume-button-container">
        <button className="wizard-resume-button" onClick={openModal}>Resumen</button>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Resume Modal"
          ariaHideApp={false}
        >
          <h2>Resumen</h2>
          <ResumeList values={fieldsArray} />
        </Modal>
      </div>
    </>
  )
}

export default Resume
