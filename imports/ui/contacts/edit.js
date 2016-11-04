import './edit.html';

import { Contacts } from '../../api/contacts';

Template.editContact.onCreated(function(){
  let docId = FlowRouter.getParam('id');
  this.autorun(() => {
    this.subscribe('singleContact', docId);
  });
})

Template.editContact.helpers({
  'contact' () {
    let docId = FlowRouter.getParam('id');
    return Contacts.findOne(docId);
  }
});

Template.editContact.events({
  'submit [name="editContactForm"]' (event){
    event.preventDefault();

    let updatedContact = {};
    updatedContact.firstName = event.target.firstName.value;
    updatedContact.lastName = event.target.lastName.value;
    updatedContact.birthday = new Date(event.target.lastName.value);
    updatedContact.contactType = event.target.contactType.value;

    let id = FlowRouter.getParam('id');
    Meteor.call('contacts.updateContact', id, updatedContact);
    FlowRouter.go('listContacts');
    toastr.success('Contact was updated');

  }
})
