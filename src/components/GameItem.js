import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
  }

  clickedItem = () => {
    this.setState({
      clicked: true,
    });
    this.props.type === 'litter' && this.props.clickedItemClickCallback(this.props.index);
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    let clickedItemStyle = '';

    if (this.state.clicked) {
      this.props.type === 'litter' ? clickedItemStyle = ' spotted-litter' : clickedItemStyle = ' spotted-nature';
    }
    
    const icon = ItemIcons[this.props.type];

    return (
      <div className={`game-item${clickedItemStyle}`} style={itemStyle} onClick={this.clickedItem}>
        <img src={icon} alt='Item' className='icon-item'></img>
      </div>
    );
  }
}

export default GameItem;
