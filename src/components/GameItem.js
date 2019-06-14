import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedItem: false,
    };
  }
  
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }
  
// learned this through ada-students-ports project 
  onItemClick = () => {
    this.setState({
      clickedItem: true,
    });
    this.props.type === 'litter' && this.props.onItemClickCallback(this.props.index);
  }

  //create an event handler for onClick of icon
 
  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };
  

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.type];

    let addCSSToClicked = '';
    if (this.state.clicked) {
      this.props.type === 'litter' ? addCSSToClicked = 'spotted-litter' : addCSSToClicked = 'spotted-nature';
    }
    
    // const isLitter = icon === 'litter' ? className="spotted-litter" : className="spotted-nature"
      
    return (
        <div className={`game-item${addCSSToClicked}`} style={itemStyle} onClick={this.onItemClick}>    
          <img src={icon} alt="Item" className="icon-item"></img>
        </div>
    );
  }

}
export default GameItem;
