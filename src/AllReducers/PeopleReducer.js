const initialState = {
  peoples: [],
};

const PeopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDPEOPLE":
      return {
        ...state,
        peoples: [...state.peoples, action.payload],
      };
    case "DELPEOPLE":
      return {
        ...state,
        peoples: state.peoples.filter((e) => e.id !== action.payload),
      };
    case "UPDATEPEOPLE":
      const x = state.peoples.map((e) =>
        e.id === action.payload.idholder
          ? { ...e, name: action.payload.edit }
          : e
      );
      return {
        ...state,
        peoples: x,
      };
    default:
      return state;
  }
};
export default PeopleReducer;
