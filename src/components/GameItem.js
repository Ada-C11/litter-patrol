import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(state) {
    super(state);

    this.state = {
      type: this.props.type,
      className: 'game-item',
      addPoint: this.props.addPoint,
    };
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    addPoint: PropTypes.func.isRequired,
  }

  onImgClick = () => {
    if (this.props.type === "litter") {
      this.state.addPoint();
      this.setState({
        className: 'game-item spotted-litter',
      })
    } else {
      this.setState({
        className: 'game-item spotted-nature'
      })
    }
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.state.type];
    
    return (
      <div className={this.state.className} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item" onClick={this.onImgClick}></img>
      </div>
    );
  }
}

export default GameItem;