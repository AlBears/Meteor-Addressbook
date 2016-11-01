 import './list.html';

 import { Contacts } from '../../api/contacts';

 Template.listContacts.onCreated(() => {
   Meteor.subscribe('contacts');
 });

 Template.listContacts.helpers({
   'contacts'() {
     return Contacts.find({}, { sort: { firstName: 1 } });
   }
 });
