const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  render() {
    return (
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
};

ReactDOM.render(<App />, document.getElementById('app'))