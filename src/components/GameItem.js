import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  // height and layer must be a number, and they are required
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  render() {
    // ** Specifying CSS for inline styling
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.icon];

    let spottedType;

    // console.log(`*********** ${icon}`);
    if (this.props.icon === "litter") {
      spottedType = "spotted-litter"
    } else {
      spottedType = "spotted-nature"
    }

    return (
      <div className={`game-item ${spottedType}`} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;
