import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spotted: 'unspotted'
    } 
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }
  
  onItemClicked = () => {
    this.setState({
      spotted: 'spotted',
    })
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };
        
    const icon = ItemIcons[this.props.type]

      return (
      <div className={`game-item ${this.state.spotted}-${this.props.natureOrLitter}`} style={itemStyle}>
        <img  onClick={this.onItemClicked} src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;
