/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * 9 quotes in an array 
***/
let quotes = []; 

quotes = [
  {
    quote: 'Each time we face our fear, we gain strength, courage, and confidence in the doing.',
    source: 'Theodore Roosevelt',
  },
  {
    quote: 'Get busy living or get busy dying.',
    source: 'Stephen King',
    citation: 'Rita Hayworth and Shawshank Redemption',
    year: '1982',
  },
  {
    quote: 'Only put off until tomorrow what you are willing to die having left undone.',
    source: 'Pablo Picasso',
  },
  {
    quote: 'If you want to live a happy life, tie it to a goal, not to people or things.',
    source: 'Albert Einstein',
  },
  {
    quote: 'The opposite of love is not hate; it’s indifference.',
    source: 'Elie Wiesel',
    citation: 'US News & World Report',
  },
  {
    quote: 'I never knew how to worship until I knew how to love.',
    source: 'Henry Ward Beecher',
  },
  {
    quote: 'Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.',
    source: 'Harriet Tubman',

  },
  {
    quote: 'It is impossible to escape the impression that people commonly use false standards of measurement — that they seek power, success and wealth for themselves and admire them in others, and that they underestimate what is of true value in life.',
    source: 'Sigmund Freud',
    citation: 'Civilization and Its Discontents',
    year: '1930',
  },
  {
    quote: 'Live in the sunshine, swim the sea, drink the wild air.',
    source: 'Ralph Waldo Emerson',
    year: '1904',
  },

]


/***
 * The getRandomQuote function should create a random number, and use that random number to return a random quote object from the quotes array.
***/

function getRandomQuote(){
  let randomNum = Math.floor(Math.random() * quotes.length);  
  return quotes[randomNum];
};


/***
 * The getRandomQuote function should create a random number, and use that random number to return a random quote object from the quotes array.
***/

function printQuote(){
  let randomQuoteObject = getRandomQuote();
  let htmlString = `
  <p class="quote">${randomQuoteObject.quote}</p>
  <p class="source">${randomQuoteObject.source}`
  if(randomQuoteObject.citation){
    htmlString += `<span class="citation">${randomQuoteObject.citation}</span>`
  };
  if(randomQuoteObject.year){
    htmlString += `<span class="year">${randomQuoteObject.year}</span>`
  };

  if(randomQuoteObject.tags){
    htmlString += `<span class="tags">${randomQuoteObject.tags}</span>`
  };
  htmlString += '</p>';

  document.getElementById('quote-box').innerHTML = htmlString; 
};


//Auto-refreshed quotes
setInterval(printQuote, 10000);
  

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);