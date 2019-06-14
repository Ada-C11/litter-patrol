import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  static propTypes = {
    addPoints: PropTypes.func.isRequired,
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired
  }

  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  // Determine CSS class based on item type if clicked
  getClass = () => {
    if (this.state.clicked) {
      if (this.props.type === 'litter') {
        return 'spotted-litter';
      } else {
        return 'spotted-nature';
      }
    }
    return '';
  }

  // Click handler to mark item as clicked and add points if appropriate
  handleClick = () => {
    if (this.state.clicked === false) {
      if (this.props.type === 'litter') {
        this.props.addPoints();
      }
      this.setState({clicked: true});
    }
  };

  // Render litter or nature item on screen
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };
  
    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];
      
    return (
      <div onClick={this.handleClick} className={`game-item ${this.getClass()}`} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;
