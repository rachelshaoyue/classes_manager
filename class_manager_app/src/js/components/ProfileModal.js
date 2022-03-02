import {Modal, Button} from 'react-bootstrap';
import ProfileForm from './ProfileForm';

const ProfileModal = (props) => {
  const {
    onHide  } = props;

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Edit Profile</h4>
            <ProfileForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Cancel</Button>
          <Button variant="primary">OK</Button>
        </Modal.Footer>
      </Modal>
    );
};

export default ProfileModal;
  
