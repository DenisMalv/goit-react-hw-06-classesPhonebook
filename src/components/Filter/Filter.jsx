import React from 'react';
import propTypes from 'prop-types';
import css from './filter.module.css';

import { connect, /*useDispatch,*/ useSelector } from 'react-redux';
// import { filterContact } from 'redux/contactsSlice/contactsSlice'; - hooks version
import { getFilterValue } from 'redux/contactsSlice/contactsSlice';
import { mapDispatchToProps } from 'redux/classes/mapDispatchToProps';

const Filter = ({ filterContactClass }) => {
  const filterInputValue = useSelector(getFilterValue);
  //   const dispatch = useDispatch(); - hooks version

  const handleFilterInput = event => {
    // dispatch(filterContact({ text: event.currentTarget.value })); - hooks version
    filterContactClass({ text: event.currentTarget.value });
  };

  return (
    <>
      <label className={css.label}>
        Find by contact name
        <input
          className={css.inputFilter}
          type="text"
          value={filterInputValue}
          onChange={handleFilterInput}
        ></input>
      </label>
    </>
  );
};

Filter.propTypes = {
  filterContactClass: propTypes.func.isRequired,
};

// export default connect(null, { filterContact })(Filter);
export default connect(null, mapDispatchToProps)(Filter);
