import './style.scss';
import classNames from 'classnames';

export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string
  };

  static defaultProps = {
    color:'#09bb07'
  };

  render(){
    return (
      <div className={classNames('react-progress',this.props.cssClass)}>
        <div className="bd" style={{
            backgroundColor:this.props.color,
            width:this.props.width
          }}></div>
      </div>
    );
  }
}
