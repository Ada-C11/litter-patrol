import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLitter: this.props.itemType === 'litter',
      cssSpottedClass: null,
      spotted: false,
    };
  }

  onItemClick = () => {
    if (!this.state.spotted) {
      this.setState({
        cssSpottedClass: this.state.isLitter ? 'litter' : 'nature',
        spotted: !this.state.spotted,
      });
      if (this.state.isLitter) {
        this.props.onItemClickedCallback();
      }
    }
  };

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item

    const icon = ItemIcons[this.props.itemType];

    return (
      <div
        className={'game-item spotted-' + this.state.cssSpottedClass}
        style={itemStyle}
        onClick={this.onItemClick}
      >
        <img src={icon} alt="Item" className="icon-item" />
      </div>
    );
  }
}

GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
};
export default GameItem;
