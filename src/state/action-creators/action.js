export const updateDropdownReducerState = (obj) => {
  return (dispatch) => {
    dispatch({
      type: "update-dropdown-reducer",
      payload: obj,
    });
  };
};
