export const Contacts = new Mongo.Collection('contacts');

let Schemas = {};

Schemas.Phones = new SimpleSchema({

  type: {
    type: String,
    allowedValues: ['personal', 'work']
  },

  phone: {
    type: String
  }
});

Schemas.Emails = new SimpleSchema({

  type: {
    type: String,
    allowedValues: ['personal', 'work']
  },

  email: {
    type: String
  }
});

Schemas.Contacts = new SimpleSchema({
  firstName: {
    type: String
  },

  lastName: {
    type: String
  },

  contactType: {
    type: String,
    allowedValues: ["friends", "colleagues"],
    optional: true
  },

  birthday: {
    type: Date,
    optional: true
  },

  phones: {
    type: [Schemas.Phones],
    optional: true
  },

  emails: {
    type: [Schemas.Emails],
    optional: true
  },

  createdAt: {
    type: Date
  },

  owner: {
    type: String
  }
});

Contacts.attachSchema(Schemas.Contacts);

export const ContactsIndex = new EasySearch.Index({
  collection: Contacts,
  fields: ['firstName'],
  engine: new EasySearch.MongoDB({
    selector (searchObject, options, aggregation){
      let selector = this.defaultConfiguration().selector(searchObject, options, aggregation);
      let categoryFilter = options.search.props.categoryFilter;


      if(_.isString(categoryFilter) && !_.isEmpty(categoryFilter)){
        selector.contactType = categoryFilter;
      }

      selector.owner = options.search.userId;

      return selector;
    }
  })
})
