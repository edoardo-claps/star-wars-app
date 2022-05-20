import {COUNTER_INCREMENT, COUNTER_SET} from '../actions/constants';

const counterreducer = (state = 1, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT:
      return state + 1;
    case COUNTER_SET:
      return (state = action.payload);
    default:
      return state;
  }
};
export default counterreducer;
