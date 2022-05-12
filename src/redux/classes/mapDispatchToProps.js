export const mapDispatchToProps = dispatch => ({
  addContactClass: object => {
    dispatch({ type: 'contacts/addContact', payload: object });
  },
  deleteContactClass: id => {
    dispatch({ type: 'contacts/deleteContact', payload: id });
  },
  filterContactClass: text => {
    dispatch({ type: 'contacts/filterContact', payload: text });
  },
});
