import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const HeaderSearch = ({searchInvisible}) => {

  return (
  <form data-id="search-form" className={clsx("header-controls-search-form", "form-inline", searchInvisible && "invisible")}>
      <input className="form-control" placeholder="Поиск" />
  </form>
  );
};

HeaderSearch.propTypes = {
  
};

export default HeaderSearch;