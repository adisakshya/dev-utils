const swaggerCombine = require('swagger-combine');
const fs = require("fs"); 

async function createSpec(json) {
    fs.writeFile('specs/specs.json', JSON.stringify(json), err => {
        if (err) {
            console.log('Error creating specs', err);
        } else {
            console.log('Successfully created specs');
        }
    })
}

swaggerCombine('docs/swagger.yml')
    .then(async (res) => {
        await createSpec(res);
    })
    .catch(err => console.error(err));