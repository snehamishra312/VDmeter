const initialState = {
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  console.log('HELLLOOO reducerrrrrr');
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
