/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react"; // Import the Component component from React
import { Card } from "react-bootstrap";
import { MDBMask, MDBView } from "mdbreact";

class Thumbnail extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     hover: false
  //   };
  //   this.toggleHover = this.toggleHover.bind(this);
  // }

  // toggleHover() {
  //   this.setState({ hover: !this.state.hover });
  // }

  render() {
    return (
      <>
        <a href={this.props.link} target="_blank">
          <Card
            id="card"
            border="dark"
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}
          >
            <MDBView hover zoom>
              <Card.Img variant="top" src={this.props.image} />
              <MDBMask className="flex-center" overlay="white-strong">
                <h3
                  style={{ color: "#555555", textShadow: "1px 3px 0 #CCE1E5" }}
                >
                  CLICK TO VIEW
                </h3>
              </MDBMask>
            </MDBView>
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
