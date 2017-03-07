import React from 'react';
import Casella from './Casella';
import Riga from './Riga';

export default class Scacchiera extends React.Component {
  render() {
    const listaCasella = [];

    for (let i = 1; i <= 8; i++) {
      listaCasella.push(<Casella key={i}/>);
    }

    // utilizzare
    return (
      <div>
        <Riga>
          {listaCasella}
        </Riga>

        <Riga>
         {listaCasella}
        </Riga>

        <Riga>
          {listaCasella}
        </Riga>

        <Riga>
          {listaCasella}
        </Riga>

        <Riga>
          {listaCasella}
        </Riga>

        <Riga>
          {listaCasella}
        </Riga>

        <Riga>
          {listaCasella}
        </Riga>

        <Riga>
          {listaCasella}
        </Riga>

      </div>
    );
  }
}
