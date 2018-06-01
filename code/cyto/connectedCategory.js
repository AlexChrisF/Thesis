const mapStateToProps = (state, props) => {
  return state;
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    createCategory: (action, element) => {
      const categoryName = element.value;
      const category = {
        color: randomcolor(),
        description: categoryName,
        identifier: uuidv4(),
        index: index++,
        visible: true
      };
      dispatch(createCategoryAction(category));
    };
  };
};

const ConnectedCategories = connect(mapStateToProps, mapDispatchToProps)(
  Categories
);

export default ConnectedCategories;
