import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
    };
  }

  onItemClicked = () => {
    this.setState({isClicked: true});
    if (this.props.type === "litter") {
      this.props.updateScoreCallback();
    }
  }

  markImage = () => {
    if (this.state.isClicked) {
      if (this.props.type === "litter") {
        return "spotted-litter"
      } else {
        return "spotted-nature"
      }
    } else {
      return ""
    }
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`,
      zIndex: this.props.layer,
    };

    const icon = ItemIcons[this.props.type];

    return (
      // Added the onClick to both div and img elements to increase surface area of click
      <div className={"game-item " + this.markImage()} style={itemStyle} onClick={ this.onItemClicked } disabled={this.props.isClicked}>
        <img src={icon} alt="Item" className="icon-item" onClick={ this.onItemClicked } disabled={this.props.isClicked}></img>
      </div>
    );
  }
}

GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

export default GameItem;