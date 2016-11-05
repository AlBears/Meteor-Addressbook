FlowRouter.route('/', {
  name: 'home',
  action () {
    BlazeLayout.render('home');
  }
});

FlowRouter.route('/contacts/add', {
  name: 'addContact',
  action () {
    BlazeLayout.render('addContact');
  }
});

FlowRouter.route('/contacts/list', {
  name: 'listContacts',
  action () {
    BlazeLayout.render('listContacts');
  }
});

FlowRouter.route('/contacts/edit/:id', {
  name: 'editContact',
  action () {
    BlazeLayout.render('editContact');
  }
});

FlowRouter.route('/contacts/search', {
  name: 'searchContacts',
  action () {
    BlazeLayout.render('searchContacts');
  }
});
