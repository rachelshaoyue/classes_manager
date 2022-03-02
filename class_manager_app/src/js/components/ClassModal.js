import {Modal, Button} from 'react-bootstrap';
import ClassForm from './ClassForm';

const ClassModal = props => {

  const {
    onHide,
    action_title,
    class_data
  } = props;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Class Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{action_title}</h4>
        <ClassForm
          class_data={class_data}
          onHide={onHide}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ClassModal;
  
