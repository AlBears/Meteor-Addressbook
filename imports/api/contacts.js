export const Contacts = new Mongo.Collection('contacts');

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
