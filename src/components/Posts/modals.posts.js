import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const Modals = ({ isShow, dataModal, isClose }) => {
  const title = dataModal && dataModal.title
  const body = dataModal && dataModal.body
  return (
    <React.Fragment>
      <Modal show={isShow} onHide={isClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={isClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
    )
}

export default Modals