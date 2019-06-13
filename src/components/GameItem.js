import React, { Component } from "react";
import "../App.css";
import ItemIcons from "../ItemIcons.js";
import PropTypes from "prop-types";

class GameItem extends Component {

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.item.type];
    const spotted = this.props.item.type === "litter" ? "spotted-litter" : "spotted-nature"


    return (
      <div className={`${spotted} game-item`} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item" />
      </div>
    );
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired
  };
}

export default GameItem;
