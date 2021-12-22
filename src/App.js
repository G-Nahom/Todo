import React,{Component} from 'react';

class App extends Component{
  constructor(){
    super();
    this.state={
      showGreen:false
    }
    this.Toggler=this.Toggler.bind(this);
  }

  Toggler(){
    this.setState({
      showGreen:!this.state.showGreen
    })
  }

  render(){
    var green={
      color:'green'
    }
    var blue={
      color:"blue"
    }
    return (
      <div>
        <h1 style={this.state.showGreen?green:blue}>Yewaass</h1>
       <button onClick={this.Toggler}>Toggle</button>
      </div>
    )
  }
}

export default  App;