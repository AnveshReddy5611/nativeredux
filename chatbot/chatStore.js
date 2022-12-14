import { createStore} from 'redux'
const defaultState = {
  email: "test@gmail.com",
  password: "test123",
  loginSuccess: false,
};
function chatStore(state=defaultState, action) {
  switch(action.type) {
    case "LOGIN":
      return {...state,
          email: action.payload.email, 
          loginSuccess: true,
        };
    default:
      return state;
  }
}
export default createStore(chatStore);