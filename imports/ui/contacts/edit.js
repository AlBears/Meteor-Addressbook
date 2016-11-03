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
