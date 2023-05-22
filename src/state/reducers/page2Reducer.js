const initialState = {
  DropdownData: {
    dropdown1: { primary: "", secondary: "" },
    dropdown2: { primary: "", secondary: "" },
    dropdown3: { primary: "", secondary: "" },
    dropdown4: { primary: "", secondary: "" },
    dropdown5: { primary: "", secondary: "" },
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "update-dropdown-reducer":
      return { ...state, DropdownData: action.payload };
    default:
      return state;
  }
};

export default reducer;
