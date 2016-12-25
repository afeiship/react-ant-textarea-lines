import './dev.scss';
import ReactProgress from './main';


class App extends React.Component{
  constructor(props){
  	super(props);
  	this.state = {
      width:'50%'
    };
  }

  _click1(){
    this.setState({width:'80%'});
  }

  _click2(){
    this.setState({width:'20%'});
  }

  render(){
    return (
      <div className="hello-react-progress">
        <button onClick={this._click1.bind(this)}>CLick to Add process</button>
        <button onClick={this._click2.bind(this)}>CLick to Sub process</button>
        <ReactProgress width={this.state.width} />
      </div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
