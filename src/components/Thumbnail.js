/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react"; // Import the Component component from React
import { Card } from "react-bootstrap";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

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
    var cardText;
    var cardCategory;

    if (this.state.hover) {
      imageStyle = { opacity: "0.6", cursor: "pointer" };
      cardText = "CLICK TO VIEW";
      cardCategory = "";
    } else {
      imageStyle = { opacity: "1" };
      cardText = this.props.description;
      cardCategory = this.props.category;
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
                {cardText}
                <br />
                <br />
                {cardCategory}
              </Card.Text>
            </Card.Body>
          </Card>
        </a>
      </>
    );
  }
}

export default Thumbnail;

// function Example() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }
