var attr = DS.attr;

var Guest = DS.Model.extend({
  name: attr('string'),
  emailAddress: attr('string')
});

export default Guest;
