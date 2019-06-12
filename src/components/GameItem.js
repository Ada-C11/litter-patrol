import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemDisplay: 'none',
      alreadyClicked: false,
    }
  }
  // why does this need to be static?
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }

  onIconClick = () => {
    console.log(this.state.itemDisplay);
    this.props.updateScoreCallback(this.props.type, this.state.alreadyClicked);
    this.setState({
      itemDisplay: this.props.type === 'litter' ? 'spotted-litter' : 'spotted-nature',
    });
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Updated the icon type
    const icon = ItemIcons[this.props.type];
   

    return (
      <div className={`game-item ${this.state.itemDisplay}`} style={itemStyle}>
        <img onClick={this.onIconClick} src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;
