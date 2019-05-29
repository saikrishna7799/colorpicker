import React, {Component} from 'react';
import '../App.css';

class ExternalCircleComponent extends Component {
  // constructor(props){
  //     super(props);
      
  // }

  componentWillMount(){

  }
  componentDidMount(){
      
  }

render() {
  return (
      <div className="external-circle" style={{width:this.props.mainCoordinates.width, height : this.props.mainCoordinates.width, }}>
      
      </div>
  );
}
}
export default ExternalCircleComponent;
  