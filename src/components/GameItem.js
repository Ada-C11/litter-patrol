import React, { Component } from 'react';
import '../App.css';
import ItemIcons from '../ItemIcons.js';
import PropTypes from 'prop-types';


class GameItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickStatus: false,
    };
  }

  static propTypes = {
    height: PropTypes.number.isRequired,
    layer: PropTypes.number.isRequired,
  }

  onChangeSpottedStatus = () => {
    this.setState({ clickStatus: true });
  }

  handleClick = () => {
    this.onChangeSpottedStatus();

    if (this.props.itemType === "litter") {
      this.props.clickEvent();
    }
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // Update this to select the correct icon for each item
    const icon = ItemIcons[this.props.itemType];

    let classInformation = "game-item";
    
    if (this.state.clickStatus === true && this.props.itemType === "litter") {
        classInformation = "game-item spotted-litter"
      } else if (this.state.clickStatus === true && this.props.itemType !== "litter") {
        classInformation = "game-item spotted-nature"
      }

    return (
      <div className={classInformation} style={itemStyle} onClick={this.handleClick}>
        <img src={icon} alt="Item" className="icon-item"></img>
      </div>
    );
  }
}

export default GameItem;
