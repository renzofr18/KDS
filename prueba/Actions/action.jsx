const Add = () => {
  return {
    type: "ADD_PLATE",
    amount: 1,
  };
};

const Remove = () => {
  return {
    type: "REMOVE_ORDER",
    amount: -1,
  };
};

export default { Add, Remove };
