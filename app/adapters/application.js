export default DS.ActiveModelAdapter.extend({
  host: ENV.APP.API_URL,
  namespace: 'api/v1'
});
