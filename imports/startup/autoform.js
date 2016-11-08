AutoForm.addHooks(['afAddContactForm'], {
  onSuccess: () => {
    FlowRouter.go('listContacts');
    toastr.success('Contact was added');
  }
});
