import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSpotted:false,
    };
  }
  
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  onItemClick = () => {
    this.setState({
      isSpotted: true,
    });
    if (this.props.type === 'litter') {
      this.props.updateScoreCallback();
    }
    
  }

  render() {

    let spottedType = undefined;
    if (this.state.isSpotted) {
      if (this.props.type === 'litter') {
        spottedType = 'spotted-litter';
      } else {
        spottedType ='spotted-nature';
      }
    }
    

    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
      
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];

    return (
      <div className={`game-item ${spottedType}`} style={itemStyle} onClick={this.onItemClick}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;
