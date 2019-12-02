import React, {useEffect} from 'react';
import clsx from 'clsx';
import {useSelector, useDispatch} from 'react-redux';
import {showLoadBtn, fetchCategories, setCategoryId, fetchProducts, clearProducts} from '../../actions/actionCreators';

const Categories = () => {
  const dispatch = useDispatch();
  const {items, categoryId} = useSelector(state => state.categoriesList);

  const handleClick = (e, id) => {
    e.preventDefault();
    dispatch(setCategoryId(id));
    dispatch(fetchProducts(0));
  }
  return (
    <ul className="catalog-categories nav justify-content-center">
      <li className="nav-item">
          <a className={clsx("nav-link", categoryId === null && 'active')} href="#" onClick={e => handleClick(e, null)}>Все</a>
      </li>
      {
        items.map(category => {
          return (
            <li key={category.id} className="nav-item">
              <a className={clsx("nav-link", categoryId === category.id && 'active')} href="#" onClick={e => handleClick(e, category.id)}>{category.title}</a>
            </li>
          )
        })
      }
    </ul>
  );
};

export default Categories;