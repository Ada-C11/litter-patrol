import React, { Component } from "react";
import "../App.css";
import ItemIcons from "../ItemIcons.js";
import PropTypes from "prop-types";

class GameItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      litterSpotter: ""
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ litterSpotter: "spotted-litter" });
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.item.type];

    return (
      <div className="game-item" style={itemStyle}>
        <section className={this.state.litterSpotter}>
          <img
            onClick={this.handleClick}
            src={icon}
            alt="Item"
            className="icon-item"
          />
        </section>
      </div>
    );
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired
  };
}

export default GameItem;
