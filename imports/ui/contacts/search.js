import './search.html';

import { ContactsIndex } from '../../api/contacts';

Template.searchContacts.helpers({
  'contactsIndex' () {
    return ContactsIndex;
  },

  'inputAttributes'() {
    return { 'class': 'form-control', 'id': 'searchTerm'}
  }
});