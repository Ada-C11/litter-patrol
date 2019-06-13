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

    // select the correct icon for each item
    const icon = ItemIcons[this.props.type];

    // **** check type and set class to give feedback on if it should've been clicked ****
    let checkOrX;
    const changeClickRegister = () => {
      console.log('changeClickRegister was triggered');
      checkOrX = this.props.type === 'litter' ? 'spotted-litter' : 'spotted-nature'
  }

    return (  // **** ADD AN EVENT LISTENER ****
      <div className="game-item" style={itemStyle}>
        <img src={icon} alt="Item" className={`icon-item ${checkOrX}`} onClick={changeClickRegister}></img>
      </div>
    );
  }
}

export default GameItem;
