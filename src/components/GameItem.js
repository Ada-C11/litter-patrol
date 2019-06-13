import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item 
      let icon = ItemIcons[this.props.type]
      console.log(icon)
    
    onButtonClick = (icon) => {
      if (icon === "litter") {
      this.setState({
        clickedItem: "spotted-litter"
      });
      } else {
        this.setState({
          clickedItem: "spotted-nature"
      });
      }
      // console.log(event.target.value);
    }

    return (
      <section onClick={this.onButtonClick} >
        <div className={`game-item ${this.state.clickedItem}`} style={itemStyle}>
          <img src={icon} alt="Item" className="icon-item"></img>
        </div>
      </section>
    );
  }
}

export default GameItem;
