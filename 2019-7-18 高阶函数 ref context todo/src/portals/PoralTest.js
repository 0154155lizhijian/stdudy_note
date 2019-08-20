import React from "react";
import ReactDOM from "react-dom";

class PortalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.div = document.createElement("div");
    props.className && (this.div.className = props.className);
    props.style &&
      Object.keys(props.style).map(
        key => (this.div.style[key] = props.style[key])
      );
    document.body.appendChild(this.div);
  }

  componentWillUnmount() {
    document.body.removeChild(this.div);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.div);
  }
}

export default PortalComponent;
