import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import './component/base.css';
import AppMain from './component/AppMain';
import AppContext from './context/appContext';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["testt11"],
      id: 0
    }
  }
  updateValue = (key, value) => {
    this.setState({ [key]: value });
  }
  render() {
    return (
      <AppContext.Provider value={{ state: this.state, updateValue: this.updateValue }}>
        <Router>
          <Route exact path="/" component={AppMain} />
          <Route path="/active" component={AppMain} />
          <Route path="/completed" component={AppMain} />
        </Router>
      </AppContext.Provider>
    );
  }
}

export default App;
