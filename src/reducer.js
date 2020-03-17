import { data, arrOfTitles } from './data';
import {
  newStateColumn,
  filterFullTableData,
  newStateSortUp,
  newStateSortDown,
  newStateFiltered,
  filterBooleanData,
} from './reducersFuncs';

const initialState = {
  data,
  arrOfTitles,
  inputValue: ''
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case 'DELETE_ROW':
      return {
        ...state,
        data: state.data.filter((item) => {
          const { length } = Object.keys(item);
          return item[length - 1] !== true;
        })
      }

    case 'DELETE_COLUMN':
      return {
        ...state,
        data: newStateColumn(state, action),
        arrOfTitles: state.arrOfTitles.filter((item, index) => index !== action.payload ? item : '')
      };

    case 'SWITCH_CHECKBOX_STATUS':
      return {
        ...state,
        data: state.data.map((item, index) => {
          if (index === action.payload) {
            const { length } = Object.keys(item);
            item[length - 1] = !item[length - 1];
          }
          return item;
        })
      };

    case 'SORT_UP':
      return {
        ...state,
        data: newStateSortUp(state, action),
      };

    case 'SORT_DOWN':
      return {
        ...state,
        data: newStateSortDown(state, action)
      };

    case 'SET_VALUE':
      return {
        ...state,
        inputValue: `${action.payload}`
      };

    case 'FILTER_VALUE':
      return {
        ...state,
        data: newStateFiltered(state, action),
        arrOfTitles
      };

    case 'CLEAR_INPUT':
      return {
        ...state,
        data,
        inputValue: ''
      };

    case 'SEARCH_IN_ALL_TABLE':
      return {
        ...state,
        data: filterFullTableData(state, action),
        arrOfTitles
      };

    case 'FILTER_BOOLEAN':
      return {
        ...state,
        data: filterBooleanData(state, action),
        arrOfTitles
      };
    case 'RETURN_ALL_BOOLEAN':
      return {
        ...state,
        data,
        arrOfTitles
      };
    default:
      return state
  }
}

export default reducer;