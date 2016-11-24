const React = require('react');
const ReactDOM = require('react-dom');
const reqwest = require('reqwest');

class App extends React.Component {

  constructor(props) {
    // constructor is the only place you can assign this.state
    super(props);
    this.state = { 
      quoteText: "My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.", 
      quoteCite: "Ellen DeGeneres" 
    };
    console.log(this);
  }

  // Les Life Cycle Hooks!
  componentDidMount() {
    // this runs when the component is mounted
    // only once
    reqwest({
      url: 'http://api.forismatic.com/api/1.0/',
      method: 'get',
      type: 'jsonp',
      jsonpCallback: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
    })
    .then(function(resp) {
      console.log("Success! " + resp);
      
      // this.resp = this.resp.bind(this);
      console.log(this);
      this.setState({ // this keyword has changed because this is now inside another func
        quoteText: resp.quoteText,
        quoteCite: resp.quoteAuthor
      })
    }.bind(this)) // .bind sets the context, sets the context of `this` in the outer fun to `this` in innner context
    .fail(function(err, msg) {
      console.warn("Failed :(" + err, msg);
    });
  }

  componentWillUnmount() {
    // this will run when component is removed, it'll destroy the DOM element created
    // abort the ajax request if it is still going
  }

  render() {
    return (
      <div>
        <h1>Need a quote?</h1>
        <div className="quote">
          <blockquote>{this.state.quoteText}</blockquote>
          <cite>{this.state.quoteCite}</cite>    
        </div>
        <div className="btn">
          <button>Quote Me</button>
        </div>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'))