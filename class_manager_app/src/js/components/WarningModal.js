import {Modal, Button} from 'react-bootstrap';

const WarningModel = (props) => {
  const {
    onHide,
    actionMessage,
    handleAction
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
            Warning
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Proceed with caution!</h4>
          <p>
            {actionMessage}
          </p>
          <p>
            Are you sure about this action?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Cancel</Button>
          <Button variant="danger" onClick={handleAction}>OK</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default WarningModel;
  
