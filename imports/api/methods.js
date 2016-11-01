import { Contacts } from './contacts';

Meteor.methods({

  'contacts.addContact' (newContact) {
    if (!Meteor.userId()) { throw new Meteor.Error('not-authorized'); }

    newContact.owner     = Meteor.userId();
    newContact.createdAt = new Date();

    Contacts.insert(newContact);
  }

});
