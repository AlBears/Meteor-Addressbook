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
