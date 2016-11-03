const moment = require('moment');

Template.registerHelper('formatDate', (date) => {
  return moment(date).format('DD MMMM YYYY');
});
