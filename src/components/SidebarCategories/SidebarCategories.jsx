
import {
  SidebarContainer,
  CheckboxInput,
  CategoriesWrapper,
  Title,
  CategoryLabelWrapper,
} from "./SidebarCategoriesStyles";

const SidebarCategories = ({ categories, selectedCategories, onCategoryChange }) => {
  return (
    <SidebarContainer>
      <Title>Categorías</Title>
      <CategoriesWrapper>
        {categories.map((category) => (
          <label key={category}>
            <CheckboxInput
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => onCategoryChange(category)}
            />
            <CategoryLabelWrapper>{category}</CategoryLabelWrapper>
          </label>
        ))}
      </CategoriesWrapper>
    </SidebarContainer>
  );
};

export default SidebarCategories;
