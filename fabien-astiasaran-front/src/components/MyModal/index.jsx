import './MyModal.css'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default function MyModal({show, onHide, modalContent}){
     return (
        <Modal show={show} onHide={onHide} className='modal-lg'>
          <Modal.Header closeButton>
            <Modal.Title>{modalContent.title}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
             <img src={modalContent.image}/>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
  );
}