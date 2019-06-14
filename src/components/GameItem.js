import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor () {
    super();
    this.state = {
      spottedType: '',
    }
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  onTypeClick = () => {
    let spottedType;
    if (this.props.icon === 'litter') {
      spottedType = 'spotted-litter';
      this.props.onItemClicked();
    } else {
      spottedType = 'spotted-nature';
    }

    this.setState({
      spottedType: spottedType,
    });
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.icon];
    let spottedType = '';

    return (
      <div className={`game-item ${this.state.spottedType}`} style={itemStyle} onClick={this.onTypeClick}>
          <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;
