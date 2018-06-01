const categories = (state = [], action) => {
  switch (action.type) {
    
	case ADD_CATEGORIES:
      return action.categories;

    case CREATE_CATEGORY:
      return [...state, action.category];
	  
    default:
      return state;
  }
};

export default categories;
