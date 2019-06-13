import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';


class GameItem extends Component {
constructor(props) {
  super(props);
  this.state = {
    className: ""

  }
}

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }


markAsSpotted = () => {
  if (this.props.type === "litter") {
    this.setState({className: "spotted-litter"});
    this.props.itemClicked(this.props.type);
  } else {
    this.setState({className: "spotted-nature"});
  }
};


  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];
    
    return (
      <div className={`game-item ${this.state.className}`} style={itemStyle}  onClick={this.markAsSpotted}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;
