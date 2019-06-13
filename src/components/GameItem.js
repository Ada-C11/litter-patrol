import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      className: 'game-item',
      testingItems: this.props.testingItems
  })
}
  
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  // helper function
  markItem = () => {
    // console.log(event.target);
    // console.log(this.state.itemType);

    if (this.state.testingItems === "litter"){
      console.log(`spotted litter! ${this.state.testingItems}`)
      this.setState({
        className: 'game-item spotted-litter'
        
      } )
    } else {
      console.log(`spotted non litter! ${this.state.testingItems}`)
      this.setState({
        className: 'game-item spotted-nature'
      })
    }
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.testingItems]

    return (
      <div className={this.state.className} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item" onClick={this.markItem}></img>
      </div>
    );
  }
}

export default GameItem;
