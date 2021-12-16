import React from 'react';


export interface Stats {
  name: string
}

export default class App extends React.Component {

  
  state: Readonly<Stats> = {
    name: "让我瞅瞅中午吃啥"
  };

  
  render(): React.ReactNode {
    return <h3>Hello World!  {this.state.name}</h3>
  }
}
