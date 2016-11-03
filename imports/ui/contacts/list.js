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

 Template.listContacts.events({
   'click [data-remove="contact"]' () {
     Meteor.call('contacts.removeContact', this._id);
     toastr.info('Contact was removed');
   }
 })
