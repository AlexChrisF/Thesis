const Categories = ({
	categories
}) => {
  return (
      {categories.map(category => (
          <ConnectedCategory
            key={category.identifier}
            identifier={category.identifier}
            categories={categories}
          />
        ))}
  );
};

export Categories