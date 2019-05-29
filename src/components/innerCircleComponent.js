import React, {Component} from 'react';
import '../App.css';

class InnerCircleComponent extends Component {
  constructor(props){
      super(props);
      this.state = {
        angleArray : [],
        colorArray : ['ffd800','ff496e', '00ab64', 'a857f6', 'ffa600', '13c2f4', 'ffd800']
      };
  }

  componentWillMount(){
      
      let anglesArray =  360 / this.props.mainCoordinates.sectors;


  }
  componentWillReceiveProps(nextProps, nextState){
      

  }
  componentDidMount(){
      
  }

render() {
      let angle = 360 / this.props.mainCoordinates.sectors;
      let skewValue = 90 - angle;  //For Skew Adjustments we have to sutract the angle from 90deg...
      let angleArray = [];
      for(let i=0; i < this.props.mainCoordinates.sectors; i++){
        angleArray.push(
        <div className={i + "inner sector"} style={{transform: `rotate(${angle * (i+1)}deg) skew(${skewValue}deg)`, backgroundColor:`#${this.state.colorArray[i]}`}}></div>)
      }

  return (
      <div className="inner-circle" style={{width:this.props.mainCoordinates.width, height : this.props.mainCoordinates.width}}>
      {angleArray}
      </div>
  );
}
}
export default InnerCircleComponent;
  