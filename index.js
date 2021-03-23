const axios = require('axios');
const cheerio = require('cheerio');


const argv = process.argv[2]?.trim();
const config = {
    method: 'get',
    url: 'https://codequiz.azurewebsites.net/',
    headers: { 
      'Cookie': 'hasCookie=true'
    }
  };
  
 axios(config)
  .then(function (response) {
    const html = response.data;
    const $ = cheerio.load(html);
    const arrResult = $('td').toArray().map((x) => { return $(x).text()?.trim()});
    const indexKey = arrResult.indexOf(argv);
    if (indexKey !== -1) {
        console.log(arrResult[indexKey + 1]);
    } else {
        console.log('Not Found');
    }
  })
  .catch(function (error) {
    console.log('error: ', error);
  });
