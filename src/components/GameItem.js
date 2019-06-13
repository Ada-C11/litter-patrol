import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickDisplay: 'none',
      clicked: false,
    }
  }
 
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    updatedScoreCallback: PropTypes.func,
  }

  updateClickStatus = () => {
    this.setState({
      clicked: true
    });
  }

  updateIconClass = () => {
    this.setState({
      clickDisplay: this.props.type === 'litter' ? 'spotted-litter' : 'spotted-nature',
    });
  }

  onIconClick = () => {

    const iconType = this.props.type;
    const clickStatus = this.state.clicked;

    let earnedPoints

    // earn 1 point for litter, -1 points for nature, and zero points otherwise
    if (clickStatus === false) {
      if (iconType === 'litter') {
        earnedPoints = 1;
      } else {
        earnedPoints = -1;
      }
    } else {
      earnedPoints = 0;
    }

    // invoking callback function
    this.props.updateScoreCallback(earnedPoints);
   
    // updating click status
    this.updateClickStatus();

    // updating className for type of icon spotted
    this.updateIconClass();
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Updated the icon type
    const icon = ItemIcons[this.props.type];
   

    return (
      <div onClick={this.onIconClick} className={`game-item ${this.state.clickDisplay}`} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;
