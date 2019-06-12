import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js'; // This is bringing in the images in the web app
import PropTypes from 'prop-types';

class GameItem extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    // const icon = ItemIcons.rock; 
    // const b = this.props.type
    // const itemImage = {
    //   type: this.props.type,
    // }

    const icon = ItemIcons[this.props.type]; 
    console.log(icon);

    return (
      <div className="game-item" style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;
