const CONTACT_LOADED = 'CONTACT_LOADED';
const ADD_CONTACT = 'ADD_CONTACT';
const DELETE_CONTACT = 'DELETE_CONTACT';
const UPDATE_NAME_TEXT = 'UPDATE_NAME_TEXT';
const UPDATE_SURNAME = 'UPDATE_SURNAME';
const UPDATE_CONTACT = 'UPDATE_CONTACT';
const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_BIRTHDAY = 'UPDATE_BIRTHDAY';
const UPDATE_ID = 'UPDATE_ID';



const initialState = {
  ContactsData: [],
  newNameText: "",
  newSurnameText: "",
  newEmailText: "",
  newbirthdayText: "",
  selectedID: null,
  selectedIDRowData: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONTACT_LOADED:
      return {
        ...state,
        ContactsData: action.payload
      };
    case ADD_CONTACT: {
      const newContacts = {
        id: action.newId,
        name: state.newNameText,
        surname: state.newSurnameText,
        email: state.newEmailText,
        birthday: state.newbirthdayText,
      };
      return {
        ...state,
        ContactsData: [...state.ContactsData, newContacts],
        newNameText: "",
        newSurnameText: "",
        newEmailText: "",
        newbirthdayText: "",
        selectedID: null,
        selectedIDRowData: null
      };
    }
    case UPDATE_CONTACT: {
      return {
        ...state,
        ContactsData: state.ContactsData.filter(p => {
          if (p.id === state.selectedID)
            return (p.name = state.newNameText,
              p.surname = state.newSurnameText,
              p.email = state.newEmailText,
              p.birthday = state.newbirthdayText)
          else
            return p;
        }),
        newNameText: "",
        newSurnameText: "",
        newEmailText: "",
        newbirthdayText: "",
        selectedID: null,
        selectedIDRowData: null

      }
    }
    case UPDATE_ID: {
      return {
        ...state,
        selectedID: action.selectedID === state.selectedID ? null : action.selectedID,
        selectedIDRowData: action.selectedIDRowData === state.selectedIDRowData ? null : action.selectedIDRowData
      };
    }
    case DELETE_CONTACT: {
      const idx = state.ContactsData.findIndex((item) => item.id === state.selectedID);
      const ContactsData = [
        ...state.ContactsData.slice(0, idx),
        ...state.ContactsData.slice(idx + 1)
      ];
      return {
        ...state,
        newNameText: "",
        newSurnameText: "",
        newEmailText: "",
        newbirthdayText: "",
        selectedID: null,
        selectedIDRowData: null,
        ContactsData: ContactsData
      }
    }
    case UPDATE_NAME_TEXT: {

      return {
        ...state,
        newNameText: action.newName === state.newNameText ? null : action.newName
      };

    }
    case UPDATE_SURNAME: {

      return {
        ...state,
        newSurnameText: action.newSurname === state.newSurnameText ? null : action.newSurname
      };

    }
    case UPDATE_EMAIL: {

      return {
        ...state,
        newEmailText: action.newEmail === state.newEmailText ? null : action.newEmail
      };

    }
    case UPDATE_BIRTHDAY: {

      return {
        ...state,
        newbirthdayText: action.newBirthday === state.newbirthdayText ? null : action.newBirthday
      };

    }
    default:
      return state;
  }
}

export const loadedContactCreator = (newContact) => ({ type: CONTACT_LOADED, payload: newContact });
export const addContactCreator = (id) => ({ type: ADD_CONTACT, newId: id });
export const updateContactCreator = () => ({ type: UPDATE_CONTACT });
export const updateContactNameTextCreator = (name) => ({ type: UPDATE_NAME_TEXT, newName: name });
export const updateContactSurnameTextCreator = (sur) => ({ type: UPDATE_SURNAME, newSurname: sur });
export const updateContactEmailTextCreator = (email) => ({ type: UPDATE_EMAIL, newEmail: email });
export const updateContactBirthdayTextCreator = (birthday) => ({ type: UPDATE_BIRTHDAY, newBirthday: birthday });
export const deleteContactCreator = () => ({ type: DELETE_CONTACT });
export const updateContactIdCreator = (id, idRow) => ({ type: UPDATE_ID, selectedID: id, selectedIDRowData: idRow });