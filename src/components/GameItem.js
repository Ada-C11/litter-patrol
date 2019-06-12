import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spotted: false,
      className: this.onItemClicked
    };
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  onItemClicked = () => {
    this.setState({ 
      class: (this.props.type === "litter" ? "spotted-litter" : "spotted-nature")
  });
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];
    return (
      <div className={`game-item ${this.props.className}`} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item" onClick={this.props.class}></img>
      </div>
    );
  }
}

export default GameItem;

              // <div className={`main-class ${this.state.isSelected ? 'selected':''}`}></div>

