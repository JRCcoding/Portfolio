import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const Modalcontact = () => {
  return (
    <Modal>
      <Modal.Header closeButton>
        <Modal.Title>Contact Josh</Modal.Title>
      </Modal.Header>
      <Modal.Body>Modal success!</Modal.Body>
      <Modal.Footer>
        <Button variant='success'>Close</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Modalcontact
