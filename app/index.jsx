class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Need a quote?</h1>
          <div className="quote">
            <blockquote>My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.</blockquote>
            <cite>Ellen DeGeneres</cite>    
          </div>
          <div className="btn">
            <button>Quote Me</button>
          </div>
      </div>
    );
  }
}

// // Callback function
// function callback(response) {
//   //console.log(response);
//   $("blockquote").html(response.quoteText);
//   $("cite").html(response.quoteAuthor);
// };

// function getQuote() {
//   // jQuery JSONP juju
//   $.ajax({
//     url: "http://api.forismatic.com/api/1.0/",
//     dataType: "jsonp",
//     jsonp: "jsonp",
//     data: {
//       method: "getQuote",
//       lang: "en",
//       format: "jsonp"
//     },
//     success: callback
//   });
// }


// $('button').click(getQuote);

ReactDOM.render(<App />, document.getElementById('app'))