// const fetch = require('node-fetch');
// const cheerio = require('cheerio');

// async function getSchedule() {
//    fetch(process.env.NEXT_TEAM_SCHEDULE)
//       .then((response) => response.text())
//       .then((body) => {
//          const $ = cheerio.load(body);
//          // Now use Cheerio to select and manipulate elements
//          const elementText = $('statTable').text(); // Replace 'selector' with the appropriate CSS selector
//          console.log(elementText);
//       })
//       .catch((error) => {
//          console.error('Error:', error);
//       });
//    return elementText;
// }
