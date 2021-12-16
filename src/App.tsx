import React from 'react';
import lunchs, { Lunch } from './lunch';

export interface Stats {
  name: string,
  lunchs: Lunch[]
}

export default class App extends React.Component {


  state: Readonly<Stats> = {
    name: "我们现在有的午餐",
    lunchs
  };


  render(): React.ReactNode {
    return (
      <div>
        <h3>中午吃啥</h3>
        <div>
          <ul>
            { this.state.lunchs.map((item, index) => <li key={index}> {item.name}</li> ) }
          </ul>
        </div>
      </div>
    )
  }
}
