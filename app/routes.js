//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

module.exports = router

require('./routes/v1.js')(router);

require('./routes/v2.js')(router);

require('./routes/v3.js')(router);

require('./routes/v4a.js')(router);

require('./routes/v4b.js')(router);

require('./routes/v4c.js')(router);

require('./routes/v4d.js')(router);

require('./routes/v4e.js')(router);

require('./routes/v5.js')(router);