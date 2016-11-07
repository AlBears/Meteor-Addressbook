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

Template.searchContacts.events({
  'change [name="contactType"]'(event){
    ContactsIndex.getComponentMethods().addProps('categoryFilter', $(event.target).val());
  }
})
