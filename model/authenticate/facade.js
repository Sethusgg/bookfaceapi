const Facade = require('../../lib/facade');
const authenticateSchema = require('./schema');

class AuthenticateFacade extends Facade {}

module.exports = new AuthenticateFacade('Authenticate', authenticateSchema);
