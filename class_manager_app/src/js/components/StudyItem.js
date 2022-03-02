import React, { useState } from 'react';

const StudyItem = (props) => {
    const {
        study
    } = props;

    return (
        <>
            <h4>{study.name}</h4>
            <p>Credits</p>
            <ul>
                <li>Required: {study.required}</li>
                <li>Completed: </li>
                <li>Needed: </li>
            </ul>
        </>
    )

}

export default StudyItem;