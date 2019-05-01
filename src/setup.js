import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Splash from "./components/scenes/Splash";
import VibznApp from "./VibznApp";

export default () => {
  class App extends Component {
    constructor() {
      super();
      this.state = {
        isLoading: true,
        store: {}
      };
    }

    componentWillMount() {
      let that = this;
      setTimeout(function() {
        that.showScreen();
      }, 1000);
    }

    showScreen() {
      this.setState({ isLoading: false });
    }

    render() {
      if (this.state.isLoading) {
        return <Splash />;
      }

      return (
        //	<Provider store={createStore}>
        <VibznApp />
        //	</Provider>
      );
    }
  }
  return App;
};
