import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: this.props.height,
      layer: this.props.layer,
      type: this.props.type,
    }
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  onClickItem = () => {
    const itemType = this.state.type === 'litter' ? 'spotted-litter' : 'spotted-nature';
    const clickedOnLitter = this.state.type === 'litter' ? true : false;

    this.setState({
      spotted: itemType,
      clicked: this.props.clicked(clickedOnLitter),
    });
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[`${this.props.type}`];
    
    return (
      <div className={`game-item ${this.state.spotted}`} style={itemStyle}>
        <img onClick={ this.onClickItem } src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;
