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
      spotted: this.props.spotted,
      checkOrX: ""
    };
  }

  // **** check type and set class to give feedback on if it should've been clicked ****
  changeClickRegister = () => {
    console.log('changeClickRegister was triggered');
    const checkOrX = this.props.type === 'litter' ? 'spotted-litter' : 'spotted-nature';
    console.log(checkOrX);
    this.setState({
      checkOrX: checkOrX,
      spotted: true,
    });
    console.log(this.state.spotted);
    console.log(this.props.type);
  }

  render() {
    const itemStyle = {
      bottom: `${this.props.height}px`, // use props.height to offset from the bottom of screen
      zIndex: this.props.layer, // use props.layer to set z-index, so we display ontop of background
    };

    // select the correct icon for each item
    const icon = ItemIcons[this.props.type];

    // console.log(this.state.checkOrX);

    return (  // **** ADD AN EVENT LISTENER ****
      <div className={`game-item ${this.state.checkOrX}`} style={itemStyle}>
        <img src={icon} alt="Item" className="icon-item " onClick={this.changeClickRegister}></img>
      </div>
    );
  }
}

export default GameItem;
