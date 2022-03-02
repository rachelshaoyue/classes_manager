import { useSelector, useDispatch } from 'react-redux';
import { TYPE } from '../constants/actionTypes';
import { Row, Button, Col} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { load as loadProfile } from '../reducers/loadFormReducer';

let ProfileForm = (props) => {
    const {
        pristine,
        reset,
        submitting,
        load,
        onHide
      } = props;

    const [imgSrc, setImgSrc] = useState(null);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setImgSrc(
            URL.createObjectURL(e.target.files[0])
        );
    }
    const handleSubmit = (data) => {
        console.log('Submission received!', data);

        if(pristine === false){
            dispatch({ type: TYPE.UPDATE_PROFILE, payload: {
                name: data.name,
                img: imgSrc
            }});
        }
    };
    
    return (
        <form 
            onSubmit={props.handleSubmit(handleSubmit.bind(this))}
        >
        <Row>
            <div>
            <label>Name</label>
            <div>
                <Field
                name="name"
                component="input"
                type="text"
                placeholder="Enter your name"
                required
                />
            </div>
            </div>
        </Row>

        <Row>
            <div>
                <input  type="file" accept="image/*" onChange={handleChange}/>
                <img style={{width: "100%"}} src={imgSrc}/>
            </div>
        </Row>

        <Button variant="primary" type="submit">
            Submit
        </Button>
        </form>
    )
}

// Decorate with redux-form
ProfileForm = reduxForm({
    form: 'profile', // a unique identifier for this form
    enableReinitialize: true
})(ProfileForm);

ProfileForm = connect(state => ({
    initialValues: state.general.profile
}),
{ load: loadProfile },
)(ProfileForm);

export default ProfileForm;