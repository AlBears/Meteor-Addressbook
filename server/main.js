import { Meteor } from 'meteor/meteor';

import { Contacts } from '../imports/api/contacts';
import '../imports/api/methods';

Meteor.publish('contacts', function() {
  return Contacts.find({owner: this.userId});
})

Meteor.publish('singleContact', function(id){
  return Contacts.find({ _id: id, owner: this.userId });
});
