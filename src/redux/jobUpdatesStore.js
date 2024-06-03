import { createStore } from 'redux';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('jobUpdatesState');
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
    localStorage.setItem('jobUpdatesState', serializedState);
  } catch {
    
  }
};

const initialState = loadState() || {
  jobUpdated: false
};

function jobUpdatesReducer(state = initialState, action) {
  switch (action.type) {
    case 'JOB_UPDATED':
      const newStateAfterJobUpdate = {
        ...state,
        jobUpdated: true
      };
      saveState(newStateAfterJobUpdate);
      return newStateAfterJobUpdate;
    case 'JOB_UPDATE_RESET':
      const newStateAfterJobUpdateReset = {
        ...state,
        jobUpdated: false
      };
      saveState(newStateAfterJobUpdateReset);
      return newStateAfterJobUpdateReset;
    default:
      return state;
  }
}

const jobUpdatesStore = createStore(jobUpdatesReducer);

export default jobUpdatesStore;