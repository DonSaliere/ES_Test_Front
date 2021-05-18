import { connect } from 'react-redux';
import Contacts from './Contacts';
import { loadedContactCreator, addContactCreator, updateContactCreator, updateContactNameTextCreator, deleteContactCreator, updateContactIdCreator, updateContactSurnameTextCreator, updateContactEmailTextCreator, updateContactBirthdayTextCreator } from '../../Redux/contacts-reducer';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

// let AuthRedirectComponent = withAuthRedirect(News);

const mapStateToProps = state => ({
  contacts: state.contacts.ContactsData,
  newNameText: state.contacts.newNameText,
  selectedID: state.contacts.selectedID,
  selectedIDRowData: state.contacts.selectedIDRowData,
  newSurnameText: state.contacts.newSurnameText,
  newEmailText: state.contacts.newEmailText,
  newbirthdayText: state.contacts.newbirthdayText
})

const mapDispatchToProps = dispatch => {
  return {
    loadedContact: (newContact) => {
      dispatch(loadedContactCreator(newContact));
    },
    addContact: (id) => {
      dispatch(addContactCreator(id));
    },
    updateContact: () => {
      dispatch(updateContactCreator());
    },
    deleteContact: () => {
      dispatch(deleteContactCreator());
    },
    updateContactId: (idContact, idRow) => {
      dispatch(updateContactIdCreator(idContact, idRow));
    },
    updateContactNameText: (name) => {
      dispatch(updateContactNameTextCreator(name));
    },
    updateContactSurnameText: (sur) => {
      dispatch(updateContactSurnameTextCreator(sur));
    },
    updateContactEmailText: (email) => {
      dispatch(updateContactEmailTextCreator(email));
    },
    updateContactBirthdayText: (birthday) => {
      dispatch(updateContactBirthdayTextCreator(birthday));
    }
  }
}

const ContactsContainer = withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(Contacts));

export default ContactsContainer;