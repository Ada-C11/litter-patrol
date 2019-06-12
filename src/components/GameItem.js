import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  // onItemClick = () => {
  //   let spottedItem = ``
  // if (this.props.type === "litter") {
  //   spottedItem = "spotted-litter"
  // } else {
  //   spottedItem = "spotted-nature"
  // }
  // }

  render() {
    let spottedItem = ""
    const onItemClick = () => {
    if (this.props.type === "litter") {
      spottedItem = "spotted-litter"
    } else {
      spottedItem = "spotted-nature"
    }
    }

    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];

    return (
      <div className="game-item {spottedItem}" style={itemStyle} onClick={ this.onItemClick }>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;
