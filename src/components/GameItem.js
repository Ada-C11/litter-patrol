import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor() {
    super()
    this.state = {
      spottedItem: "",
    };
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
    onItemClick: PropTypes.func,
  }

  onClick = () => {
    if (this.props.type === "litter") {
      this.setState({
        spottedItem: "spotted-litter"
      });
    } else {
      this.setState({
        spottedItem: "spotted-nature"
      });
    }
    
    if (this.props.onItemClick) {
      this.props.onItemClick(this.props.type);
    }
  }

  render() {
    let spotItem = this.state.spottedItem
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];

    return (
      <div
        className={`game-item ${spotItem}`}
        style={itemStyle}
        onClick={this.onClick}
      >
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;
