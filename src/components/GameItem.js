import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props);
    this.state = { spotted: false };
  }
  
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  onItemClick = () => {
    if (!this.state.spotted) {
      this.setState({ spotted: true });
      this.props.onItemClicked(this.props.type);
    }
  }
  
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    // const icon = ItemIcons.rock;
    const icon = ItemIcons[this.props.type]

    let gameItemStyle = "game-item"
    if (this.state.spotted) {
      const litterOrNature = (this.props.type === 'litter') ?  'litter' : 'nature';
      gameItemStyle += ` spotted-${litterOrNature}`;
    };

    return (
      <div className={gameItemStyle} style={itemStyle} onClick={ this.onItemClick } >
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;