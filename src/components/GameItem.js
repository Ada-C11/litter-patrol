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
    super(props)
    this.state = {
      addClickCss: ""
    }
  }
  
  onNatureItemClick = () => {
    this.setState(
      {
        addClickCss: this.props.iconName === "litter" ?
          "spotted-litter" : "spotted-nature"
      })
    this.props.onItemClicked(this.props.iconName)()
    }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.iconName];

    return (
      <div className={`game-item ${this.state.addClickCss}`} onClick={this.onNatureItemClick} style={itemStyle}>
        <img src={icon}  alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;
