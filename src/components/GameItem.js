import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }

  constructor() {
    super();

    this.state = {
      className: ""
    };
  }

  onItemClicked = () => {
    console.log('Item was clicked')
    const className = this.props.type === 'litter' ? 'spotted-litter' : 'spotted-nature';
    this.setState({ className });
    if (this.props.type === 'litter' && this.state.className === "") {
      this.props.onItemClicked();
    }
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    const icon = ItemIcons[this.props.type];

    const spotted = "game-item " + this.state.className;

    return (
      <div className={spotted} style={itemStyle} onClick={this.onItemClicked}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;
