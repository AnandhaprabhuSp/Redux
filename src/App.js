import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { bindActionCreators } from 'redux';
import { homeAction } from "./actions/homeAction";

class App extends Component {
  componentDidMount() {
    console.log('CDM');
    const { homeAction } = this.props;
    homeAction();
  }
  
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return{
    home:state.home
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    homeAction: bindActionCreators(homeAction, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

