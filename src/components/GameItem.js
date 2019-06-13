import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      spotted: false
    };
  }
  
  onSpot = () =>{
    if(this.state.spotted === false) {
      this.setState({ spotted: true 
      });
      this.props.onItemClickedCallback(this.props.type);
    }
  }
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    let spottedStyle;
    if (this.state.spotted){
      spottedStyle = this.props.type === "litter" ? "spotted-litter" : "spotted-nature";
    }

    const icon = ItemIcons[this.props.type];
    return (
      <div className={'game-item ' + spottedStyle} style={itemStyle} onClick={this.onSpot}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;
