import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  staticpropTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  constructor(props) {
    super();
    this.state = {
      clicked: false,
    }
  }

  onIconClick = () => {
    this.setState({
      clicked: true,
    });
  }

  render() {
    let clickStyle = undefined;
    if (this.state.clicked) {
      if (this.props.type === 'litter') {
        clickStyle = 'spotted-litter';
      } else {
        clickStyle = 'spotted-nature';
      }
    }

    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];

    return (
      <div className={`game-item ${clickStyle}`} style={itemStyle}>
        <img onClick={ this.onIconClick} src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;