export const increment = () => {
  return {
    type: "INCREMENT",
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const addpeople = (data) => {
  return {
    type: "ADDPEOPLE",
    payload: data,
  };
};
export const deletepeople = (id) => {
  return {
    type: "DELPEOPLE",
    payload: id,
  };
};

export const updatepeople = ({ edit, idholder }) => {
  return {
    type: "UPDATEPEOPLE",
    payload: { edit, idholder },
  };
};
