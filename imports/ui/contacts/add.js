import './add.html';

import { Contacts } from '../../api/contacts';

Template.addContact.events({

  'submit [name="addContactForm"]' (event) {
    event.preventDefault();

    let newContact = {
      phones: [],
      emails: []
    };

    newContact.firstName = event.target.firstName.value;
    newContact.lastName  = event.target.lastName.value;

    if (!_.isEmpty(event.target.birthday.value)) {
      newContact.birthday = new Date(event.target.birthday.value);
    }

    if (!_.isEmpty(event.target.contactType.value)) {
      newContact.contactType = event.target.contactType.value;
    }

    if (!_.isEmpty(event.target.phoneType.value) && !_.isEmpty(event.target.phoneNumber.value)) {
      newContact.phones.push({
        type: event.target.phoneType.value,
        phone: event.target.phoneNumber.value
      });
    }

    if (!_.isEmpty(event.target.emailType.value) && !_.isEmpty(event.target.emailAddress.value)) {
      newContact.emails.push({
        type: event.target.emailType.value,
        email: event.target.emailAddress.value
      });
    }

    Meteor.call('contacts.addContact', newContact);
    FlowRouter.go('listContacts');
    console.log(newContact);
    toastr.success('Contact was added');
  }

});

Template.addContact.helpers({
  'contactsCollection' () {
    return Contacts;
  }
})
