const initialState = {
  list: [],
  loading: true,
  name: '',
  search: {
    name: ''
  },
};

const myReducer = (state, action) => {
  // return {...state, ...action.payload};

  switch (action.type) {
    case 'setList': return {...state, ...action.payload, loading : false};
    case 'showLoading': return {...state, loading: true};
    case 'hideLoading': return {...state, loading: false};
    default: return {...state, ...action.payload};
  }
};
export { initialState, myReducer};
