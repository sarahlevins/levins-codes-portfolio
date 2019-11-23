/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react"; // Import the Component component from React
import { Card } from "react-bootstrap";

class Thumbnail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    var imageStyle;
    var clickMe;

    if (this.state.hover) {
      imageStyle = { opacity: "0.6", cursor: "pointer" };
    } else {
      imageStyle = { opacity: "1" };
    }
    return (
      <>
        <a href={this.props.link} target="_blank">
          <Card
            id="card"
            border="dark"
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}
          >
            <Card.Img variant="top" src={this.props.image} style={imageStyle} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                {this.props.description}
                <br />
                <br />
                {this.props.category}
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      </>
    );
  }
}

export default Thumbnail;
