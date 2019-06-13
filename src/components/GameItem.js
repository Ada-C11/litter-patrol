import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor() {
    super();
    this.state = {
      clickStatus: false 
    }

  }
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  onItemSpotted = () => {
    console.log("item spotted")
    if (this.props.type === 'litter'){
      this.props.itemClicked()
    }
    this.setState({
      clickStatus: true,
    })
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type]

    let spottedStyling = "game-item"

    if (this.state.clickStatus && this.props.type === 'litter')  {
      spottedStyling = "game-item spotted-litter"
    }
    if (this.state.clickStatus && this.props.type !== 'litter') {
      spottedStyling = "game-item spotted-nature"
    }

    return (
      <div className={spottedStyling} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item" 
          onClick={this.onItemSpotted} 
          // onClick={this.props.itemClicked}
          >
        </img>
      </div>
    );
  }
}

export default GameItem;
