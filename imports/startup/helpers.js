const moment = require('moment');

Template.registerHelper('formatDate', (date) => {
  return moment(date).format('DD MMMM YYYY');
});

Template.registerHelper('formatInputDate', (date) => {
  return date ? moment(date).format('YYYY-MM-DD') : '';
});

Template.registerHelper('selectedIfEquals', (value, check) => {
  return value == check ? 'selected' : '';
})
