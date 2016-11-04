import { Contacts } from './contacts';

Meteor.methods({

  'contacts.addContact' (newContact) {
    if (!Meteor.userId()) { throw new Meteor.Error('not-authorized'); }

    newContact.owner     = Meteor.userId();
    newContact.createdAt = new Date();

    Contacts.insert(newContact);
  },

  'contacts.removeContact'(id) {
    if (!Meteor.userId()) { throw new Meteor.Error('not-authorized'); }
    Contacts.remove({ _id: id, owner: this.userId });
  },

  'contacts.updateContact'(id, updatedContact){
    if (!Meteor.userId()){throw new Meteor.Error('not-authorized'); }
    Contacts.update({ _id: id, owner: this.userId }, {
      $set: {
        firstName: updatedContact.firstName,
        lastName: updatedContact.lastName,
        birthday: updatedContact.birthday,
        contactType: updatedContact.contactType,
      }
    });
  },

  'contacts.updatePhone' (id, phoneData){
    if (!Meteor.userId()){throw new Meteor.Error('not-authorized'); }
    Contacts.update({ _id: id, owner: this.userId }, {
      $push: {
        phones: phoneData
      }
    });
  },
  'contacts.updateEmail' (id, emailData){
    if (!Meteor.userId()){throw new Meteor.Error('not-authorized'); }
    Contacts.update({ _id: id, owner: this.userId }, {
      $push: {
        emails: emailData
      }
    });
  },
  'contacts.removePhone' (id, phoneNumber){
    if (!Meteor.userId()){throw new Meteor.Error('not-authorized'); }
    Contacts.update({ _id: id, owner: this.userId }, {
      $pull: {
        phones: {
          phone: phoneNumber
        }
      }
    });
  },

  'contacts.removeEmail' (id, emailAddress){
    if (!Meteor.userId()){throw new Meteor.Error('not-authorized'); }
    Contacts.update({ _id: id, owner: this.userId }, {
      $pull: {
        emails: {
          email: emailAddress
        }
      }
    });
  }

});
