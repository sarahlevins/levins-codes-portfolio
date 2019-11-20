/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react"; // Import the Component component from React
import { Card } from "react-bootstrap";

class Thumbnail extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { opacity: "0.7" };
  // }

  // handleHover = () => {
  //   this.setState({ opacity: "1" });
  // };

  render() {
    return (
      <>
        <a
          href={this.props.link}
          target="_blank"
          // onMouseOver={this.handleHover}
        >
          <Card id="card" border="dark">
            <Card.Img
              variant="top"
              src={this.props.image}
              // style={{ opacity: this.state.opacity }}
              className="hover__no-hover"
            />
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
