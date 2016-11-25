A simple app that starts with a quote and can generate and present random quotes with the press of a button.

Uses React and Forismatic quotes API.

Uses [reqwest](https://github.com/ded/reqwest) for getting data in JSONP format, which was needed because of CORS being disabled. Axios and `.fetch()` lack JSONP support.

![Screenshot](https://raw.githubusercontent.com/aamnah/Random-Quotes/master/screenshot-random-quotes.png)

### checklist
- [x] get a new quote on page load
- [x] get a new quote with button click
- [x] add a Tweet button
- [x] make it presentable
