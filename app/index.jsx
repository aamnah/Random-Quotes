const React = require('react');
const ReactDOM = require('react-dom');
const reqwest = require('reqwest');

class App extends React.Component {

  constructor(props) {
    // constructor is the only place you can assign `this.state`
    super(props);
    this.state = { 
      quoteText: "My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.", 
      quoteCite: "Ellen DeGeneres" 
    };
  };

  fetchQuote() {
    console.log(this.state);
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
      console.log(this.State)
      console.log("Success! " + resp);
     // console.log(this);
      this.setState({ // this keyword has changed because this is now inside another func
        quoteText: resp.quoteText,
        quoteCite: resp.quoteAuthor
      })
    }.bind(this)) // .bind sets the context, sets the context of `this` in the outer func to `this` in innner context
    .fail(function(err, msg) {
      console.warn("Failed :(" + err, msg);
    }.bind(this));
  };



    handleClick(e) {
      console.log(this)
      e.preventDefault();
      // this.setState({ // this keyword has changed because this is now inside another func
      //   quoteText: "",
      //   quoteCite: ""
      // })
      fetchQuote()
    }

  // Les Life Cycle Hooks!
  componentDidMount() {
    // this runs when the component is mounted
    // only once
    this.fetchQuote()
  };


  componentWillUnmount() {
    // this will run when component is removed, it'll destroy the DOM element created
    // abort the ajax request if it is still going
  };

  render() {
    let quoteText = this.state.quoteText
    let quoteCite = this.state.quoteCite

    return (
      <div>
        <div className="quote">
          <blockquote>{quoteText}</blockquote>
          <cite>{quoteCite}</cite>    
        </div>
        <div className="btn">
          <button onClick={this.handleClick}><i className="fa fa-2x fa-repeat" /></button>
          <button><i className="fa fa-2x fa-twitter" /></button>
          {/* <a href="https://twitter.com/share" className="twitter-share-button" data-text={this.state.quoteText + " ~" + this.state.quoteCite}  data-url=" " data-show-count="false">Tweet</a> */}
        </div>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'))