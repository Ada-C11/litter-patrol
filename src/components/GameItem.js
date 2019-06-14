import React, {Component} from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  constructor () {
  super();
  this.state = {
   beenClicked: false,
    };
  };
 
  
  onItemClicked = () => {
    this.setState({
      beenClicked: true
    });
    this.props.onItemClickedCallback(this.props.type);
  };

  render() {
    let clickType;
    if (this.state.beenClicked) {
      clickType = this.props.type === 'litter' ? 'spotted-litter' : 'spotted-nature';
    };

    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
      iconType: this.props.type,
    };
    
    //W 1
    // Update this to select the correct icon for each item
    const icon = ItemIcons[itemStyle.iconType];
    
    return (
      <div className={"game-item " + clickType} style={itemStyle} onClick={ this.onItemClicked }>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}


GameItem.propTypes = {
  height: PropTypes.number.isRequired,
  layer: PropTypes.number.isRequired,
}

export default GameItem;
