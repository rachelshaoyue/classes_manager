import { TYPE } from "../constants/actionTypes";

const reducer = (state = {}, action) => {
    switch (action.type) {
        case TYPE.LOAD_FORM:
            return {
                data: action.data
            }
        default:
            return state
  }
}

/**
 * Simulates data loaded into this reducer from somewhere
 */
 export const load = data => ({ type: TYPE.LOAD_FORM, data });

 export default reducer;