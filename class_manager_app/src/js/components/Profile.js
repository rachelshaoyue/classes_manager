import { Row, Col, Button } from "react-bootstrap";
import ProfileModal from "./ProfileModal";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CLASS_PROGRAM } from '../constants/adjs';
import StudyItem from "./StudyItem";

const Profile = (props) => {
    const [modalShow, setModalShow] = useState(false);

    const selectProfile = state => state.general.profile;
    const profile = useSelector(selectProfile);

    const selectStudies = state => state.general.studies;
    const studies = useSelector(selectStudies);

    const renderMajors = studies.map(selectedStudy => {
        if(selectedStudy.program === CLASS_PROGRAM.MAJOR){
            return <StudyItem key={selectedStudy.id} study={selectedStudy}/>
        }
    });

    const renderMinors = studies.map(selectedStudy => {
        if(selectedStudy.program === CLASS_PROGRAM.MINOR){
            return <StudyItem key={selectedStudy.id} study={selectedStudy}/>
        }
    });
    
    return (
        <Row>
            <Col md={4}>
                <h2>{profile.name}</h2>
                <img id="profileImg" src={require("../media/selfie.jpg")}/>
                <Button onClick={() => setModalShow(true)}>Edit Profile</Button>
                <ProfileModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                />
            </Col>
            <Col md={8}>
                <h2>Program</h2>
                <h3>Major</h3>
                {renderMajors}
                <h3>Minor</h3>
                {renderMinors}
            </Col>
        </Row>
    )
}

export default Profile;