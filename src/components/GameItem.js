import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }


  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  onClickChangeStatus = () => {
    this.setState({
      status: true,
    });

    if (this.props.type === 'litter'){
    this.props.onSpottedClickCallback();}
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type]

    let statusClass = 'game-item';
    if (this.state.status === true && this.props.type === 'litter') {
      statusClass = 'game-item spotted-litter'
    } else if (this.state.status === true && this.props.type !== 'litter') {
      statusClass = 'game-item spotted-nature'
    } 

    return (
      <div className={ statusClass } style={itemStyle} onClick={this.onClickChangeStatus} >
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;
