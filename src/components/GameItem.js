import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spot: false
    };
  }
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
    // type: PropTypes.string.isRequired,
  }

   spottedItemClick = () => {
    this.setState({
      spot: true,
    });
  
    if (this.props.type === 'litter') {
      this.props.spottedItemClickCallback()
    };
  }
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // let checkOrX = 

    // (this.state.spot) { //this -checkOrX- isnt worrrrrking 
    //   const checkOrX = this.props.type === 'litter' ? 'spotted-litter' : 'spotted-nature'; //need to fix to thissssss ughhh
    // }

    // Update this to select the correct icon for each item [done]
    const icon = ItemIcons[this.props.type];

    let statusClass = 'game-item' 
    if (this.state.spot === true && this.props.type === 'litter') {
      statusClass = 'game-item spotted-litter'
      }  else if (this.state.spot === true && this.props.type !== 'litter') {
      statusClass = 'game-item spotted-nature'
    } 
    // console.log(this.state.spot)
    return (
      <div className={statusClass} style={itemStyle} onClick={this.spottedItemClick}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    
    );
  }
}

export default GameItem;
