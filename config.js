const config = {
    user: 'bootcamp',
    password: 'Pass@123',
    server: 'bootcampaug5server.database.windows.net',
    database: 'bootcampaug5db',
    options: {
      encrypt: true, // Use this if you're on Windows Azure
      enableArithAbort: true
    }
  };
 
module.exports = config;