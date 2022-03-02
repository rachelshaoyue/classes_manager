import { useSelector, useDispatch } from 'react-redux';
import { TYPE } from '../constants/actionTypes';
import { 
    CLASS_PROGRAM,
    CLASS_STATUS,
    CLASS_TYPE
 } from "../constants/adjs";
import { GRADE, SEASON_BLOCK } from "../constants/nouns";
import { Row, Button, Col} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { load as loadClass } from '../reducers/loadFormReducer';

let ClassForm = (props) => {
    const {
        class_data,
        pristine,
        reset,
        submitting,
        load,
        onHide
      } = props;

    const data = () => {
        if(class_data !== null){
            return { 
                className: class_data.className,
                instructor: class_data.instructor,
                credits: class_data.credits,
                status: class_data.status,
                program: class_data.program,
                type: class_data.type,
                term: class_data.term,
                fall: class_data.seasonBlock.includes(SEASON_BLOCK.FALL),
                winter: class_data.seasonBlock.includes(SEASON_BLOCK.WINTER),
                summer: class_data.seasonBlock.includes(SEASON_BLOCK.SUMMER),
                grade: class_data.grade,
                courseID: class_data.courseID,
                id: class_data.id
            }
        } else {
            return {
                className: null,
                instructor: null,
                credits: null,
                status: null,
                program: null,
                type: null,
                term: null,
                fall: false,
                winter: false,
                summer: false,
                grade: null,
                courseID: null
            }
        }
    };

    const dispatch = useDispatch();

    const handleSubmit = (data) => {
        console.log('Submission received!', data);

        let type = "";

        if(class_data === null){
            type = TYPE.ADD_CLASS;
        }else{
            type = TYPE.UPDATE_CLASS;
        }

        let seasonBlock = [];

        if(data.fall === true){
            seasonBlock.push(SEASON_BLOCK.FALL);
        }
        if(data.winter === true){
            seasonBlock.push(SEASON_BLOCK.WINTER);
        }
        if(data.summer === true){
            seasonBlock.push(SEASON_BLOCK.SUMMER);
        }

        if(pristine === false){
            dispatch({ type: type, payload: {
            className: data.className,
            instructor: data.instructor,
            credits: data.credits,
            status: data.status,
            program: data.program,
            type: data.type,
            term: data.term,
            seasonBlock: seasonBlock,
            grade: data.grade,
            courseID: data.courseID,
            id: class_data === null ? null : data.id
            }});
        }


        onHide();
    };

    useEffect(() => {
        load(data());
    }, []);
    
    return (
        <form 
            onSubmit={props.handleSubmit(handleSubmit.bind(this))}
        >
          <Row>
            <Col sm>
              <div>
                <label >Class Name</label>
                <div>
                  <Field
                  name="className"
                  component="input"
                  type="text"
                  placeholder="Enter a class name"
                  required
                  />
                </div>
              </div>
            </Col>

            <Col sm>
              <div>
                <label>Instructor</label>
                <div>
                  <Field
                  name="instructor"
                  component="input"
                  type="text"
                  placeholder="Enter an instructor's name"
                  required
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <div>
                <label>Course ID</label>
                <div>
                  <Field
                    name="courseID"
                    component="input"
                    type="text"
                    placeholder="Enter a course ID"
                    required
                    />
                </div>
              </div>
            </Col>
            <Col sm>
              <div>
                <label>Credits</label>
                <div>
                  <Field
                  name="credits"
                  component="input"
                  type="number"
                  placeholder="Enter a number of credits"
                  required
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <div>
                <div>
                  <Field
                  name="program"
                  component="select"
                  required
                  >
                    <option value="">Select a program</option>
                    <option value={CLASS_PROGRAM.MAJOR}>Major</option>
                    <option value={CLASS_PROGRAM.MINOR}>Minor</option>
                  </Field>
                </div>
              </div>
            </Col>

            <Col sm>
              <div>
                <div>
                  <Field
                  name="type"
                  component="select"
                  required
                  >
                    <option value="">Select a class type</option>
                    <option value={CLASS_TYPE.REQUIRED}>Required</option>
                    <option value={CLASS_TYPE.TBD}>To Be Determined</option>
                    <option value={CLASS_TYPE.WISH}>Wish</option>
                  </Field>
                </div>
              </div>
            </Col>

            <Col sm>
              <div>
                <div>
                  <Field
                  name="status"
                  component="select"
                  required
                  >
                    <option value="">Select a status of the class</option>
                    <option value={CLASS_STATUS.IN_PROGRESS}>In Progress</option>
                    <option value={CLASS_STATUS.PLANNED}>Planned</option>
                    <option value={CLASS_STATUS.COMPLETED}>Completed</option>
                  </Field>
                </div>
              </div>
            </Col>

            <Col sm>
              <div>
                <div>
                  <Field
                  name="grade"
                  component="select"
                  required
                  >
                    <option>Select a grade</option>
                    <option value={GRADE.A}>A</option>
                    <option value={GRADE.A_MINUS}>A-</option>
                    <option value={GRADE.B_PLUS}>B+</option>
                    <option value={GRADE.B}>B</option>
                    <option value={GRADE.B_MINUS}>B-</option>
                    <option value={GRADE.C_PLUS}>C+</option>
                    <option value={GRADE.C}>C</option>
                    <option value={GRADE.C_MINUS}>C-</option>
                    <option value={GRADE.D_PLUS}>D+</option>
                    <option value={GRADE.D}>D</option>
                    <option value={GRADE.D_MINUS}>D-</option>
                    <option value={GRADE.F}>F</option>
                  </Field>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col sm>
              <label>Pick a season block</label>
              <div>
                <div>
                  <Field
                    name="summer"
                    id="summer"
                    component="input"
                    type="checkbox"
                  />
                  <label htmlFor="summer">Summer</label>
                </div>
              </div>
              <div>
                <div>
                  <Field
                    name="fall"
                    id="fall"
                    component="input"
                    type="checkbox"
                  />
                  <label htmlFor="fall">Fall</label>
                </div>
              </div>
              <div>
                <div>
                  <Field
                    name="winter"
                    id="winter"
                    component="input"
                    type="checkbox"
                  />
                  <label htmlFor="winter">Winter</label>
                </div>
              </div>
            </Col>
            <Col sm>
              <div>
                <label>Term</label>
                <div>
                  <Field
                  name="term"
                  component="input"
                  type="text"
                  placeholder="Enter a term"
                  required
                  />
                </div>
              </div>
            </Col>
          </Row>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </form>
    )
}

// Decorate with redux-form
ClassForm = reduxForm({
    form: 'class', // a unique identifier for this form
    enableReinitialize: true
})(ClassForm);

ClassForm = connect(state => ({
    initialValues: state.load.data
}),
{ load: loadClass },
)(ClassForm);

export default ClassForm;