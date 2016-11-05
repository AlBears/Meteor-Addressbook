export const Contacts = new Mongo.Collection('contacts');

export const ContactsIndex = new EasySearch.Index({
  collection: Contacts,
  fields: ['firstName'],
  engine: new EasySearch.MongoDB({})
})
