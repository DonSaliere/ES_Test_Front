const ADD_CONTACT = 'ADD_CONTACT';
const DELETE_CONTACT = 'DELETE_CONTACT';
const UPDATE_NAME_TEXT = 'UPDATE_NAME_TEXT';
const UPDATE_SURNAME = 'UPDATE_SURNAME';
const UPDATE_CONTACT = 'UPDATE_CONTACT';
const UPDATE_EMAIL = 'UPDATE_EMAIL';
const UPDATE_BIRTHDAY = 'UPDATE_BIRTHDAY';
const UPDATE_ID = 'UPDATE_ID';



const initialState = {
  ContactsData: [
    { id: 0, name: 'Михаил', surname: 'Белоусов', email: 'o@outlook.com', birthday: '06.05.1990' },
    { id: 1, name: 'Руслан', surname: 'Лапин', email: 'hr6zdl@yandex.ru', birthday: '06.03.1992' },
    { id: 2, name: 'Павел', surname: 'Исаков', email: 'kaft93x@outlook.com', birthday: '29.06.1995' },
    { id: 3, name: 'Пётр', surname: 'Мельников', email: 'dcu@yandex.ru', birthday: '11.02.1998' },
    { id: 4, name: 'Людовик', surname: 'Тетерин', email: '19dn@outlook.com', birthday: '25.06.1998' },
    { id: 5, name: 'Витольд', surname: 'Алчевский', email: 'pa5h@mail.ru', birthday: '06.05.1998' },
    { id: 6, name: 'Йомер', surname: 'Дзюба', email: '281av0@gmail.com', birthday: '31.03.2002' },
    { id: 7, name: 'Филипп', surname: 'Жуков', email: '8edmfh@outlook.com', birthday: '13.02.2007' },
    { id: 8, name: 'Дарий', surname: 'Титов', email: 'sfn13i@mail.ru', birthday: '22.04.2008' },
    { id: 9, name: 'Цезарь', surname: 'Королёв', email: 'g0orc3x1@outlook.com', birthday: '14.12.2020' },
    { id: 10, name: 'Алёна', surname: 'Скляренко', email: 'rv7bp@gmail.com', birthday: '17.10.1990' },
    { id: 11, name: 'Мария', surname: 'Скляренко', email: '93@outlook.com', birthday: '01.09.1991' },
    { id: 12, name: 'Эльвира', surname: 'Палий', email: 'er@gmail.com', birthday: '02.12.1991' },
    { id: 13, name: 'Марта', surname: 'Савельева', email: 'o0my@gmail.com', birthday: '06.12.1993' },
    { id: 14, name: 'Хильда', surname: 'Никонова', email: '715qy08@gmail.com', birthday: '16.01.1994' },
    { id: 15, name: 'Элеонора', surname: 'Калашникова', email: 'vubx0t@mail.ru', birthday: '06.07.1994' },
    { id: 16, name: 'Полина', surname: 'Пестова', email: 'wnhborq@outlook.com', birthday: '10.09.1994' },
    { id: 17, name: 'Жанна', surname: 'Максимова', email: 'gq@yandex.ru', birthday: '15.04.1996' },
    { id: 18, name: 'Алёна', surname: 'Хитрук', email: 'ic0pu@outlook.com', birthday: '22.09.1996' },
    { id: 19, name: 'Янина', surname: 'Соловьёва', email: 'o7khr@yandex.ru', birthday: '26.06.1998' },
    { id: 20, name: 'Шарлота', surname: 'Молчанова', email: '2shlaq@outlook.com', birthday: '26.06.1998' }
  ],
  newNameText: "",
  newSurnameText: "",
  newEmailText: "",
  newbirthdayText: "",
  selectedID: null,
  selectedIDRowData: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT: {
      const newContacts = {
        id: Math.max(...state.ContactsData.map(i => i.id)) + 1,
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

export const addContactCreator = () => ({ type: ADD_CONTACT });
export const updateContactCreator = () => ({ type: UPDATE_CONTACT });
export const updateContactNameTextCreator = (name) => ({ type: UPDATE_NAME_TEXT, newName: name });
export const updateContactSurnameTextCreator = (sur) => ({ type: UPDATE_SURNAME, newSurname: sur });
export const updateContactEmailTextCreator = (email) => ({ type: UPDATE_EMAIL, newEmail: email });
export const updateContactBirthdayTextCreator = (birthday) => ({ type: UPDATE_BIRTHDAY, newBirthday: birthday });
export const deleteContactCreator = () => ({ type: DELETE_CONTACT });
export const updateContactIdCreator = (id, idRow) => ({ type: UPDATE_ID, selectedID: id, selectedIDRowData: idRow });