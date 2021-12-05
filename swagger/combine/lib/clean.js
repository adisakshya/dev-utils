const fs = require('fs');
const _ = require('lodash');
const SwaggerParser = require("@apidevtools/swagger-parser");

/**
 * Parameters to exclude from endpoints
 */
const parametersToExclude = [
    'Temp-Id',
    'X-Consumer-Username',
    'X-Authenticated-Userid'
];

/**
 * Function to exclude unwanted parameters
 */
async function cleanParameters() {
    const api = await SwaggerParser.parse("specs/specs.json");
    console.log("Cleaning API name: %s, Version: %s", api.info.title, api.info.version);
    const endpoints = api.paths;
    // For every endpoint
    for (let path in endpoints) {
        if (endpoints.hasOwnProperty(path)) {
            // For every method
            const methods = endpoints[path];
            for (let property in methods) {
                if (methods.hasOwnProperty(property)) {
                    const parameters = methods[property]['parameters'];
                    // Filter out excluded parameters
                    const newParam = _.filter(parameters, curParam => parametersToExclude.indexOf(curParam.name) == -1);
                    methods[property]['parameters'] = newParam;
                }
            }
        }
    }
    return api;
}

/**
 * Function to clean API Specs
 */
async function cleanSpecs() {
    const api = await cleanParameters();
    fs.writeFile('specs/specs.json', JSON.stringify(api), (err) => {
        if(err) {
            console.log('Failed to clean specs', err);
        } else {
            console.log('Cleaned specs');
        }
    });
}


(async () => {
    await cleanSpecs();
})();