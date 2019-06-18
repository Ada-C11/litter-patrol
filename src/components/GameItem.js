import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';

class GameItem extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      checkOrX: ""
      // spotted: this.props.spotted,
    };
  }

  // **** check type and set class to give feedback on if it should've been clicked ****
  whenImageIsClicked = () => {
    const checkOrX = this.props.type === 'litter' ? 'spotted-litter' : 'spotted-nature';
    this.setState({
      checkOrX: checkOrX,
      // spotted: true,
    });
    this.props.onItemClickedCallback(this.props.type)
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // select the correct icon for each item
    const icon = ItemIcons[this.props.type];

    return (  // **** ADD AN EVENT LISTENER ****
      <div className={`game-item ${this.state.checkOrX}`} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item " onClick={this.whenImageIsClicked}></img>
      </div>
    );
  }
}

export default GameItem;
