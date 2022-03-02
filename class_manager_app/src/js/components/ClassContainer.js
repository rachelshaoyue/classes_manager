import { useSelector, useDispatch } from 'react-redux';
import { Row, Button } from 'react-bootstrap';
import React, {useState} from 'react';
import ClassItem from './ClassItem';
import ClassModal from './ClassModal';

let ClassContainer = props => {

  const [classModalShow, setClassModalShow] = useState(false);

  const selectClasses = state => state.general.classes;

  const classes = useSelector(selectClasses);

  const renderClasses = classes.map(selectedClass => {
    return <ClassItem key={selectedClass.id} classData={selectedClass}/>
  });

  return (
    <Row>
      <Button variant="primary" onClick={() => setClassModalShow(true)}>Modify your class schedule</Button>

      <ClassModal
          show={classModalShow}
          onHide={() => setClassModalShow(false)}
          action_title={"Add a new class"}
          class_data={null}
      />
      {renderClasses}
    </Row>
  )
}

export default ClassContainer;
