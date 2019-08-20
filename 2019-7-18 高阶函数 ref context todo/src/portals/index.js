import React from "react";
import { createPortal } from "react-dom";

class Portal extends React.Component {
  constructor(props) {
    super(props);

    this.div = document.createElement("div");
    this.div.className = "portal";
    document.body.appendChild(this.div);
  }

  componentWillUnmount() {
    window.document.body.removeChild(this.node);
  }

  render() {
    return createPortal(<div>{this.props.children}</div>, this.div);
    // return (
    //   <div>
    //     {this.props.children}
    //   </div>
    // )
  }
}

export default Portal;
