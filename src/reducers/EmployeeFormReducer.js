import { EMPLOYEE_UPDATE, CLEAR_EMPLOYEE_FORM } from '../actions/types';

const INITIAL_STATE = { name: '', phone: '', shift: '' };

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case EMPLOYEE_UPDATE:
    //action.payload = { prop:'name' , value:"Jane" }
      return { ...state, [action.payload.prop]: action.payload.value };
    case CLEAR_EMPLOYEE_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
};
