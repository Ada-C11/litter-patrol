import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string
  }

  changeClickStatus = () => {
    this.setState({clicked: !this.state.clicked});
    if (this.props.type === "litter") {
      this.props.onItemClickedCallBack(this.props.id)
    }
  }

  render() {
    let classToUse = ""
    if (this.state.clicked === true && this.props.type === "litter") {
      classToUse = "spotted-litter";
    }
    if (this.state.clicked === true && this.props.type !== "litter") {
      classToUse = "spotted-nature";
    }
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item

    const icon = ItemIcons[this.props.type];

    return (
      <div className={`game-item ${classToUse}`} style={itemStyle} onClick={ this.changeClickStatus } >
        <img src={icon} alt= "Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;
