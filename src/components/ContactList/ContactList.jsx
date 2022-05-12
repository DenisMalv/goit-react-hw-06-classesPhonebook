import React from 'react';
import propTypes from 'prop-types';
import css from './ContactList.module.css';
import ContactItem from 'components/ContactItem/ContactItem';
import { connect /*useSelector*/ } from 'react-redux';
// import { getContacts, getFilterValue } from 'redux/contactsSlice/contactsSlice';
import { mapStateToProps } from 'redux/classes/mapStateToProps';

const ContactList = ({ contacts }) => {
  const contactsList = contacts.items;
  const filteredContacts = contacts.filter;

  const getFilteredContacts = () => {
    const normalizedFilter = filteredContacts.toLowerCase();
    return contactsList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  return (
    <ul className={css.contactList}>
      {getFilteredContacts().map(({ id, name, number }) => (
        <ContactItem id={id} name={name} number={number} key={id} />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filteredContact: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string,
      name: propTypes.string,
      number: propTypes.string,
    })
  ),
};

// export default ContactList;
export default connect(mapStateToProps, null)(ContactList);
