import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.headerProp}</h1>
        <h2>{this.props.contentProp}</h2>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <h1>Here is the fuckin header</h1>
    );
  }
}


export default App;
