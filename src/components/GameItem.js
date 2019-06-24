import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';


class GameItem extends Component {

  constructor() {
    super();
    this.state = {
      isClicked: false
    };
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
    isClicked: PropTypes.bool
  }

  onItemClicked = () => {
    this.setState({
      isClicked: true,
    });
    if (this.props.type === "litter") {
      this.props.points();
    }
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    const icon = ItemIcons[this.props.type];

    let clickedClass = "game-item";
    if (this.state.isClicked === true && this.props.type === "litter") {
      clickedClass = "game-item spotted-litter"
    } else if (this.state.isClicked === true && this.props.type !== "litter") {
      clickedClass = "game-item spotted-nature"
    }

    return (
      <div className={clickedClass} style={itemStyle} onClick={this.onItemClicked}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}


export default GameItem;
