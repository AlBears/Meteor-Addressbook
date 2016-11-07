FlowRouter.route('/', {
  name: 'home',
  action () {
    BlazeLayout.render('home');
  }
});

let contacts = FlowRouter.group({
  prefix: '/contacts',
  name: 'contacts',
  triggersEnter: [
    () => {
      if (!Meteor.userId()){ FlowRouter.go('home'); }
    }
  ]
})

contacts.route('/add', {
  name: 'addContact',
  action () {
    BlazeLayout.render('addContact');
  }
});

contacts.route('/list', {
  name: 'listContacts',
  action () {
    BlazeLayout.render('listContacts');
  }
});

contacts.route('/edit/:id', {
  name: 'editContact',
  action () {
    BlazeLayout.render('editContact');
  }
});

contacts.route('/search', {
  name: 'searchContacts',
  action () {
    BlazeLayout.render('searchContacts');
  }
});
