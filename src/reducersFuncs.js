import { data } from './data'

const newStateColumn = (state, action) => state.data.map((item) => {
  const keys = Object.keys(item);
  const values = Object.values(item);
  keys.pop();
  const filteredValues = values.filter((el) => {
    return el !== item[action.payload];
  })
  const resultArr = []
  for (let i = 0; i < keys.length; i += 1) {
    resultArr.push([keys[i], filteredValues[i]])
  }
  return Object.fromEntries(resultArr);
})

const newStateSortUp = (state, action) => {
  if (typeof state.data[0][action.payload] === "number") {
    return state.data.slice().sort((prev, next) => prev[action.payload] - next[action.payload]);
  }
  if (typeof state.data[0][action.payload] === "string") {
    return state.data.slice().sort((prev, next) => {
      if (prev[action.payload] < next[action.payload]) return -1;
      if (prev[action.payload] < next[action.payload]) return 1;
    });
  }
}
const newStateSortDown = (state, action) => {
  if (typeof state.data[0][action.payload] === "number") {
    return state.data.slice().sort((prev, next) => next[action.payload] - prev[action.payload]);
  }
  if (typeof state.data[0][action.payload] === "string") {
    return state.data.slice().sort((prev, next) => {
      if (prev[action.payload] > next[action.payload]) return -1;
      if (prev[action.payload] > next[action.payload]) return 1;
    });
  }
}
const newStateFiltered = (state, action) => {
  if (state.inputValue.length === 0) {
    return data;
  }
  const newState11 = data.filter((item) => item[action.payload].toString().toLowerCase().indexOf(state.inputValue.toLowerCase()) > -1);
  if (!newState11.length) {
    newState11.push({ 0: 'Type', 1: 'another', 2: 'request!', 3: 'false', 4: 'que', 5: 0, 6: 'st', 7: '!' });
  }
  return newState11;
}

const filterFullTableData = (state) => {
  const resultArr = [];
  for (let i = 0; i < 7; i += 1) {
    resultArr.push(...data.filter((item) => item[i].toString().toLowerCase().indexOf(state.inputValue.toLowerCase()) > -1));
  }
  const result = [];
  for (let i = 0; i < resultArr.length; i += 1) {
    if (resultArr.indexOf(resultArr[i]) === i) {
      result.push(resultArr[i]);

    }
  }
  if (!result.length) {
    result.push({ 0: 'Type', 1: 'another', 2: 'request!', 3: 'We', 4: 'found', 5: 0, 6: 'results.', 7: '!' });
  }
  return result;
}

const filterBooleanData = (state, action) => {
  const newState12 = data.filter((item) => {
    console.log(action.id);

    return item[3] === action.payload
  });
  if (!newState12.length) {
    newState12.push({ 0: 'Type', 1: 'another', 2: 'request!', 3: 'false', 4: 'que', 5: 0, 6: 'st', 7: '!' });
  }
  return newState12;
}

export {
  newStateColumn,
  newStateSortUp,
  newStateSortDown,
  newStateFiltered,
  filterFullTableData,
  filterBooleanData,
} 