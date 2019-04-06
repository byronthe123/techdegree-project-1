/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing
// I am aiming for the Exceeds Expectations score.

// The quotes array has quote objects with tag properties and optional year and citation properties.
const quotes = [
  {
    quote: `Don't cry because it's over, smile because it happened.`,
    source: `Dr. Seuss`,
    tags: ['Food for thought']
  },
  {
    quote: `Better to remain silent and be thought a fool than to speak out and remove all doubt.`,
    source: `Abraham Lincoln`,
    tags: ['Humor'],
    citation: `Keepinspiring.me`,
    year: 1840
  },
  {
    quote: `Nobody realizes that some people expend tremendous energy merely to be normal.`,
    source: `Albert Camus`,
    tags: ['Humor']
  },
  {
    quote: `The difference between stupidity and genius is that genius has its limits.`,
    source: `Albert Einstein`,
    tags: ['Humor', 'Funny']
  },
  {
    quote: `A day without laughter is a day wasted.`,
    source: `Charlie Chaplin`,
    tags: ['Inspirational', 'Food for thought']
  }
];

// This function returns a random quote object from the quotes array.
const getRandomQuote = () => {
  const randomNum = Math.floor((Math.random() * quotes.length) + 0);
  return quotes[randomNum];
}

// This function generates a Hex color code for the background.
const randomColorGenerator = () => {
  const options = Array.from(`0123456789abcdef`);
  let color = `#`;
  for(let i = 0; i < 6; i++) {
    color += options[Math.floor(Math.random() * options.length) + 0];
  }
  return color;
}

/* The printQuote() function displays a new quote and changes background color. 
Ternary operators were used to display properties that exist.
ES6 String interpolation is used for creating the htmlString element.*/
const printQuote = () => {
  const randomQuote = getRandomQuote();
  const htmlString = `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source"> ${randomQuote.source}
    ${randomQuote.citation ? `<span class="citation">${randomQuote.citation}</span>` : ''}
    ${randomQuote.year ? `<span class="year">${randomQuote.year}</span>` : ''}
    ${randomQuote.tags ? `<div class='tag'>#${randomQuote.tags.map((tag) => `<span>${tag}</span>`)}</div>` : ''}
  </p>`;
  document.getElementById('quote-box').innerHTML = htmlString;
  document.getElementsByTagName('body')[0].style.backgroundColor = randomColorGenerator();
}

// Set interval method set for 10 seconds to automatically run the printQuote() function to display a new quote.
setInterval(() => {
  printQuote();
}, 10000)

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
