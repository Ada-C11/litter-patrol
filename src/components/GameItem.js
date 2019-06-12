import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired
  };

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer // use props.layer to set z-index, so we display ontop of background
    };

    // TODO: Update this to select the correct icon for each item
    const type = this.props.type;
    const icon = ItemIcons[type];
    const itemClass = 'game-item';

    return (
      <div className={itemClass} style={itemStyle}>
        <img
          src={icon}
          alt={type}
          className="icon-item"
          onClick={this.onClick}
        />
      </div>
    );
  }
}

export default GameItem;
