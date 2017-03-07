import React from 'react';
import Scacchiera from './Scacchiera';


export default class App extends React.Component {
  render() {
    return (
      <div className="scacchiera">
        <h1>Scacchiera</h1>
        <Scacchiera />
      </div>
    );
  }
}
