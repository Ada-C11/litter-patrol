import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor() {
    super();

    this.state = {
      isClicked: false,
      itemClass: 'game-item'
    };
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired
  }

  onGameItemClicked = () => {
    // console.log(this.props.icon)
    if (this.props.icon === "litter") {
      this.setState({ isClicked: true, itemClass: 'game-item spotted-litter' });
      this.props.onItemClickedCallback();
    } else {
      this.setState({ isClicked: true, itemClass: 'game-item spotted-nature' });
    }
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const iconImage = ItemIcons[this.props.icon]
    

    return (
      <div onClick={this.onGameItemClicked} className={this.state.itemClass} style={itemStyle}>
        <img src={iconImage} alt="Item" className='icon-item'></img>
      </div>
    );
  }
}

export default GameItem;
