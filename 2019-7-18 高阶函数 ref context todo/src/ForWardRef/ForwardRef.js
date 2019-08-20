import React from "react";
import Focus from "../HOC/LogProps";
import Ref from "./index";

class ForwardRef extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  componentDidMount() {
    console.log(this.ref);
    // console.log(this.ref.current.state.Component);
  }

  render() {
    
    return (
      <div>
        <Focus str="a" num={123} ref={this.ref} />
        <Ref ref={this.ref} />
      </div>
    );
  }
}

export default ForwardRef;
