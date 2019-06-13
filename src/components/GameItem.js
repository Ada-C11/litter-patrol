import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
  }
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  onGameItemClick = () => {
    console.log('Item clicked!');
    if (!this.state.clicked && this.props.item === 'litter') this.props.incrementScoreFunc();
    this.setState({
      clicked: true,
    })
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.item];

    let status = '';
    if (this.state.clicked) {
      status = (this.props.item === 'litter') ? 'spotted-litter' : 'spotted-nature';
    }
    return (
      <div className={`game-item ${status}`} style={itemStyle} onClick={this.onGameItemClick}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;
