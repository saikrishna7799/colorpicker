import React, { Component } from 'react';
import './App.css';
import InnerCircleComponent from './components/innerCircleComponent';
import MiddleCircleComponent from './components/middleCircleComponent';
import ExternalCircleComponent from './components/externalCircleComponent';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        width : 500,
        height : 500,
        sectors : 5     ////It Shoukd be greater than 2
      }

      this.innerComponent = {sectors : this.state.sectors};
      this.middleComponent = {sectors : this.state.sectors};
      this.externalComponent = {sectors : this.state.sectors};
  }

  componentWillMount(){
    ///Inner Component width, height is 1/5 times of the main width of the compoenent

    ///Middle Compoent is 1/2 times of the main compoent coordinates.

    //We have to pass the coordinates calues from this compoentn itself its as overall state of the app.


    this.innerComponent.width = this.state.width / 5;   ///bothe width and height are same...for circle
    this.middleComponent.width = this.state.width / 2;
    this.externalComponent.width = this.state.width / 1;

  }

  componentDidMount(){
      
  }


render() {
  return (
      <div className="main-app" style={{width: this.state.width +'px', height:this.state.height  +'px'}}>
        <ExternalCircleComponent mainCoordinates={this.externalComponent}>
        </ExternalCircleComponent>
        
        <MiddleCircleComponent mainCoordinates={this.middleComponent}>
        </MiddleCircleComponent>

        <InnerCircleComponent mainCoordinates={this.innerComponent}>
        </InnerCircleComponent>

      </div>
  );
}
}
export default App;
  