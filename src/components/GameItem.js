import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor() {
    super();

    this.state = {
      spotted: false,
    };
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  markSpotted = () => {
    if (!this.state.spotted && this.props.type === 'litter') this.props.itemClickCallback();
    this.setState({
      spotted: true
    })
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    const icon = ItemIcons[this.props.type];

    let iconClass = 'game-item';

    if (this.state.spotted) {
      if (this.props.type === 'litter') {
        iconClass += ` spotted-litter`;
      } else {
        iconClass += ` spotted-nature`;
      }
    }

    return (
      <div className={iconClass} style={itemStyle}>
        <img onClick={ this.markSpotted } src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;
