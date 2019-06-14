import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js'; 
import PropTypes from 'prop-types';

class GameItem extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    updatePoints: PropTypes.func.isRequired,
  }

  constructor(props){
    super(props);
    this.state = {
      iconClass: "",
      wasClicked: false,
    };
  }

  markClicked = () => {

   this.setState({
     wasClicked: true,
   })

    if (this.props.type === 'litter'){
      this.props.updatePoints()
      this.setState({
        iconClass: "spotted-litter",
      });
    } else {
      this.setState({
        iconClass: "spotted-nature",
      });
    }
    
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    const icon = ItemIcons[this.props.type]; 

    return (
      <div className={"game-item " + this.state.iconClass} style={itemStyle} >
        <img src={icon} alt="Item" className="icon-item" onClick={this.markClicked}></img>
      </div>
    );
  }
}

export default GameItem;
