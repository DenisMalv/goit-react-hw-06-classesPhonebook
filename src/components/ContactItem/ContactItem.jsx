import React from 'react';
import css from './ContactItem.module.css';
import propTypes from 'prop-types';
import { connect /*useDispatch*/ } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice/contactsSlice'; - hooks version
import { mapDispatchToProps } from 'redux/classes/mapDispatchToProps';

const ContactItem = ({ id, name, number, deleteContactClass }) => {
  //   const dispatch = useDispatch();- hooks version
  return (
    <li className={css.contactList__item}>
      <span className={css.contactList__text}>{`${name}: ${number}`}</span>
      <button
        className={css.contactList__button}
        // onClick={() => dispatch(deleteContact({ id }))} - hooks version
        onClick={() => deleteContactClass({ id })}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
};

// export default ContactItem;
export default connect(null, mapDispatchToProps)(ContactItem);
