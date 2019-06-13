import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

//wave 2
class GameItem extends Component {
  propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {clicked: false};

    // This binding is necessary to make `this` work in the callback.
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      clicked: true
    }));
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    //wave 1
    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];
    const typeClass = this.props.type === "litter" ? "spotted-litter" : "spotted-nature";

    if (this.state.clicked) {
      return (
        <div className="game-item" style={itemStyle}>
          <div className={typeClass}></div>
          <img src={icon} alt="Item" className="icon-item"></img>
        </div>
      );
    } else {
      return (
        <div className="game-item" style={itemStyle} onClick={this.handleClick}>
          <img src={icon} alt="Item" className="icon-item"></img>
        </div>
      );
    }
    
  }
}

export default GameItem;
