const Controller = require('../../lib/controller');
const authenticateFacade = require('./facade');

class AuthenticateController extends Controller {}

module.exports = new AuthenticateController(authenticateFacade);
