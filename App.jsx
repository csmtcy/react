import React from "react";

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      header: "this is the fucking header",
      content: "this is the stupid content"
    }
  }

  render() {
    return (
      <div class="wrapper">
        <Header headerProps = {this.state.header} />
        <Content contentProps = {this.state.content} />
      </div>
    );
  }

}

class Header extends React.Component {
  render() {
    return(
      <h1>{this.props.headerProps}</h1>
    );
  }
}

class Content extends React.Component {
  render() {
    return(
      <h3>{this.props.contentProps}</h3>
    );
  }
}

export default App;
