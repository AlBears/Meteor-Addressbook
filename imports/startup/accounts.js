Accounts.onLogin(() => {
  FlowRouter.go('listContacts');
  toastr.success('You have been logged in');
});

Accounts.onLogout(() => {
  FlowRouter.go('home');
  toastr.info('You have been logged out');
});
