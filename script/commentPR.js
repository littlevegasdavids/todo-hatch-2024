const axios = require('axios');

axios.get('https://api.restful-api.dev/objects')
    .then(data => console.log(data))
    .catch(error => console.error(error));