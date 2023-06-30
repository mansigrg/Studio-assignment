const dotenv = require('dotenv');
dotenv.config();

const parallelExecutionThreads = process.env.PARALLEL_EXECUTION === 'true' ? 5 : 1

module.exports = [{

    // maxInstances can get overwritten per capability. So if you have an in-house Selenium
    // grid with only 5 firefox instances available you can make sure that not more than
    // 5 instances get started at a time.
    maxInstances: parallelExecutionThreads,
    //
    browserName: 'chrome',
    acceptInsecureCerts: true,
    // If outputDir is provided WebdriverIO can capture driver session logs
    // it is possible to configure which logTypes to include/exclude.
    // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
    // excludeDriverLogs: ['bugreport', 'server'],
    'cjson:metadata': {
      // For a browser
      browser: {
        name: 'chrome',
        version: '58',
      },
      device: 'MacBook Pro 15',
      platform: {
        name: 'OSX',
        version: '11.6',
      },
    },
  }];