const { defineConfig } = require('cypress');
require('dotenv').config();

console.log('Base URL:', process.env.CYPRESS_BASE_URL);

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
            config.env = {
                ...config.env,
                CYPRESS_USERNAME: process.env.CYPRESS_USERNAME,
                CYPRESS_PASSWORD: process.env.CYPRESS_PASSWORD,
            };
            return config;
        },
        baseUrl: process.env.CYPRESS_BASE_URL || 'https://trello.com',
        supportFile: 'cypress/support/index.js',
        fixturesFolder: 'cypress/fixtures',
        video: false,
        reporter: 'cypress-mochawesome-reporter',
        reporterOptions: {
            reportDir: 'cypress/reports',
            overwrite: false,
            html: true,
            json: true,
        },
        chromeWebSecurity: false,
    },
});
