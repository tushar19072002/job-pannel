import { createStore } from 'redux';


const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};


const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch {
    
  }
};

const initialState = loadState() || {
  isLoggedIn: false 
};

function loginReducer(state = initialState, action) {
  switch(action.type) {
    case 'LOGIN':
      const newStateAfterLogin = {
        ...state,
        isLoggedIn: true
      };
      saveState(newStateAfterLogin);
      return newStateAfterLogin;
    case 'LOGOUT':
      const newStateAfterLogout = {
        ...state,
        isLoggedIn: false
      };
      saveState(newStateAfterLogout);
      return newStateAfterLogout;
    default:
      return state;
  }
}

const store = createStore(loginReducer);

export default store;
