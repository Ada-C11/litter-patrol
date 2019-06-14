import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
   
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }
  onIconClick = () => {
    if (this.props.type === "litter") {
      this.setState({
      itemClicked: "spotted-litter",
      });

    } else {
      this.setState({
        itemClicked: "spotted-nature",
      })
    }
  }
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

      let icon = ItemIcons[this.props.type]
  
    return (

        <div onClick={this.onIconClick} className={`game-item ${this.state.itemClicked}`} style={itemStyle}>
          <img src={icon} alt="Item" className="icon-item"></img>
        </div>
    );
  }
}

export default GameItem;
