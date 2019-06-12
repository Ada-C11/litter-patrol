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
    type: PropTypes.string.isRequired
  }

  changeClickStatus = () => {
    this.setState({clicked: !this.state.clicked}, (state) => console.log(state));
  }

  render() {
    let classToUse = "spotted-nature"
    if (this.state.clicked === true && this.props.type == "litter") {
      classToUse = "spotted-litter";
    }
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item

    const icon = ItemIcons[this.props.type];

    return (
      // <div onClick={ this.changeClickStatus } className={classToUse}>
      <div className="game-item" style={itemStyle} onClick={ this.changeClickStatus } >
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
      // </div>
    );
  }
}

export default GameItem;
