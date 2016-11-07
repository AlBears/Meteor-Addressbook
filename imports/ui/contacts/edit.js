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
    updatedContact.contactType = event.target.contactType.value;

    if (!_.isEmpty(event.target.birthday.value)) {
      updatedContact.birthday = new Date(event.target.birthday.value);
    }

    let id = FlowRouter.getParam('id');
    Meteor.call('contacts.updateContact', id, updatedContact);
    FlowRouter.go('listContacts');
    toastr.success('Contact was updated');

  },

  'submit [name="updatePhoneForm"]' (event){
    event.preventDefault();

    if(_.isEmpty(event.target.phoneType.value) || _.isEmpty(event.target.phoneNumber.value)){
      toastr.warning('Both fields need to be filled in');
      return;
    }

    let phoneData = {
      type: event.target.phoneType.value,
      phone: event.target.phoneNumber.value
    };

    let id = FlowRouter.getParam('id');

    Meteor.call('contacts.updatePhone', id, phoneData);
    toastr.info('New phone was added');
    event.target.phoneType.value = event.target.phoneNumber.value = '';
  },

  'submit [name="updateEmailForm"]' (event){
    event.preventDefault();

    if(_.isEmpty(event.target.emailType.value) || _.isEmpty(event.target.emailAddress.value)){
      toastr.warning('Both fields need to be filled in');
      return;
    }

    let emailData = {
      type: event.target.emailType.value,
      email: event.target.emailAddress.value
    };

    let id = FlowRouter.getParam('id');

    Meteor.call('contacts.updateEmail', id, emailData);
    toastr.info('New email was added');
    event.target.emailType.value = event.target.emailAddress.value = '';
  },

  'click [data-remove="phone"]'(){
    let id = FlowRouter.getParam('id');
    let phoneNumber = this.phone;

    Meteor.call('contacts.removePhone', id, phoneNumber);
    toastr.warning('Phone was removed');
  },

  'click [data-remove="email"]'(){
    let id = FlowRouter.getParam('id');
    let emailAddress = this.email;

    Meteor.call('contacts.removeEmail', id, emailAddress);
    toastr.warning('Email was removed');
  }
})
