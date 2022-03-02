import { TYPE } from "../constants/actionTypes";
import { 
    CLASS_PROGRAM,
    CLASS_STATUS,
    CLASS_TYPE
 } from "../constants/adjs";
 import { SEASON_BLOCK } from "../constants/nouns";

const initialState = {
    studies: [
        {
            id: 0,
            name: "Bachelor of Science in Software Engineering",
            program: CLASS_PROGRAM.MAJOR,
            required: 127
        }, 
        {
            id: 1,
            name: "Web Development",
            program: CLASS_PROGRAM.MINOR,
            required: 18
        }
    ],
    classes: [
        { 
            id: 0, 
            className: "test", 
            instructor: "professor", 
            credits: "3",
            status: CLASS_STATUS.PLANNED,
            type: CLASS_TYPE.WISH,
            program: CLASS_PROGRAM.MAJOR,
            term: "2021",
            seasonBlock: [
                SEASON_BLOCK.FALL
            ],
            grade: "A",
            courseID: "Dlksj"
        },
        { 
            id: 1, 
            className: "tsdfsdest", 
            instructor: "professor", 
            credits: "3",
            status: CLASS_STATUS.PLANNED,
            type: CLASS_TYPE.WISH,
            program: CLASS_PROGRAM.MAJOR,
            term: "2021",
            seasonBlock: [
                SEASON_BLOCK.FALL
            ],
            grade: "B",
            courseID: "Dlksj"
        }
    ],
    terms: [
        "2019", 
        "2020",
        "2021"
    ],
    coop: [
        { 
            seasonBlock: [
                SEASON_BLOCK.FALL, SEASON_BLOCK.WINTER
            ]
        }
    ],
    profile: {
        name: "Rachel Taylor",
        defaultImg: "../media/selfie.jpg",
        img: null
    }
};

function nextClassId(classes) {
    let maxId = 0;
    for (const id in classes) {
        if (maxId < id) {
            maxId = parseInt(id);
        }
    }
    return maxId + 1;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.ADD_CLASS: {
            const payload = action.payload;
            return {
                ...state,
                classes: [
                    ...state.classes,
                    {
                        id: nextClassId(state.classes),
                        className: payload.className,
                        instructor: payload.instructor,
                        credits: payload.credits,
                        status: payload.status,
                        type: payload.type,
                        program: payload.program,
                        term: payload.term,
                        seasonBlock: payload.seasonBlock,
                        grade: payload.grade,
                        courseID: payload.courseID
                    }
                ]
            }
        }
        case TYPE.DELETE_CLASS:{
            const classID = action.payload;
            return {
                ...state,
                classes: state.classes.filter((oldClass) => oldClass.id !== classID)
            }     
        }
        case TYPE.UPDATE_CLASS: {
            const payload = action.payload;
            return {
                ...state,
                classes: state.classes.map(
                    (oldClass) => payload.id === oldClass.id ?
                        {
                            ...oldClass,
                            className: payload.className,
                            instructor: payload.instructor,
                            credits: payload.credits,
                            status: payload.status,
                            type: payload.type,
                            program: payload.program,
                            term: payload.term,
                            seasonBlock: payload.seasonBlock,
                            grade: payload.grade,
                            courseID: payload.courseID
                        }
                        : oldClass
                )
            }
        }
        case TYPE.UPDATE_PROFILE:
            const payload = action.payload;
            return {
                ...state,
                profile: {
                    name: payload.name,
                    img: payload.img            
                }
            }
        default:
            return state
  }
}
 
 export default reducer;