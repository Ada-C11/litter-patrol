import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor() {
    super();
    this.state = {
      spottedCorrectly: null,
    };
  }
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  onGameItemClicked = () => {
    if (this.props.type === "litter") {
      this.setState({ spottedCorrectly: true })
    } else {
      this.setState({ spottedCorrectly: false })
    }
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];

    let itemClass = "";

    if (this.state.spottedCorrectly === true) {
      itemClass = "game-item spotted-litter"
    } else if (this.state.spottedCorrectly === false) {
      itemClass = "game-item spotted-nature"
    } else {
      itemClass = "game-item"
    };

    return (
      <div onClick={this.onGameItemClicked} className={itemClass} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;
