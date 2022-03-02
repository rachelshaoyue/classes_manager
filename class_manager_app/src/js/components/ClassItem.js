import {Col, Row, Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { TYPE } from '../constants/actionTypes';
import React, { useState } from 'react';
import ClassModal from './ClassModal';
import WarningModal from './WarningModal';

const ClassItem = (props) => {
    const {
        classData
    } = props

    const [classModalShow, setClassModalShow] = useState(false);
    const [warningModalShow, setWarningModalShow] = useState(false);

    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch({ type: TYPE.DELETE_CLASS, payload: classData.id});
    }

    return (
        <Card style={{ width: '18rem', padding: '0' }}>
            <Card.Header>
                <Row>
                    <Col>
                        {classData.courseID}
                    </Col>
                    <Col>
                        Credits: {classData.credits}
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    {classData.className}
                </Card.Title>
                <Card.Text>
                    Instructor: {classData.instructor}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Program: {classData.program}</ListGroupItem>
                <ListGroupItem>Type: {classData.type}</ListGroupItem>
                <ListGroupItem>Status: {classData.status}</ListGroupItem>
            </ListGroup>
            <Card.Text className="text-center">
                {classData.grade}
            </Card.Text>
            <Card.Body>
                <Button variant="primary" onClick={() => setClassModalShow(true)}>Edit</Button>
                <Button variant="danger" onClick={() => setWarningModalShow(true)}>Delete</Button>    
            </Card.Body>
            <ClassModal
                show={classModalShow}
                onHide={() => setClassModalShow(false)}
                action_title={"Edit the class"}
                class_data={classData}
            />
            <WarningModal
                show={warningModalShow}
                onHide={() => setWarningModalShow(false)}
                actionMessage={`Delete this class, "${classData.className}".`}
                handleAction={handleDelete}
            />
        </Card>
    )
}

export default ClassItem;