import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { getAndSelectCategory } from '../../contexts/Categories/actions/CategoriesActions';
import { useCategories } from '../../contexts/Categories/CategoriesContext';
import { useForum } from '../../contexts/forum/ForumContext';
import { Error } from '../Error/Error';
import { Spinner } from '../Spinner/Spinner';

interface RouterProps {
 categoryId: string;
}
interface CategoryDetailProps extends RouteComponentProps<RouterProps> {}

export const CategoryPage = ({
 match: {
  params: { categoryId },
 },
}: CategoryDetailProps) => {
 const {
  dispatchCategories,
  categoriesState: { loading, error, selectedCategory },
 } = useCategories();
 const {
  state: { apiFunctions },
 } = useForum();
 useEffect(() => {
  console.log(selectedCategory);
  console.log(categoryId);
  console.log(selectedCategory && !selectedCategory.id.match(categoryId));
  if (selectedCategory && !selectedCategory.id.match(categoryId)) {
   console.log('calling');
   getAndSelectCategory({ apiFunctions }, { dispatchCategories }, categoryId);
  }
 }, [categoryId, selectedCategory, apiFunctions, dispatchCategories]);
 return (
  <div className="categoryPage">
   {loading ? (
    <Spinner />
   ) : error ? (
    <Error msg={error.msg} />
   ) : (
    <>{selectedCategory?.name}</>
   )}
  </div>
 );
};
