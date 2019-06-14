import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    const item = this.props.item

    // Update this to select the correct icon for each item
    const icon = ItemIcons[item.type];

    return (
      <div className={`game-item ${item.className}`}  style={itemStyle} onClick={this.props.onItemClicked}>
        <img src={icon} alt="Item" className={`icon-item ${item.className}`}></img>
      </div>
    );
  }
}

export default GameItem;
