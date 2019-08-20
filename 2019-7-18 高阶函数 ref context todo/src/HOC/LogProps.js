import React from "react";

function logProps(WrapperComponent) {
  class logProps extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Component: "logProps"
      };
    }

    componentDidMount() {
      console.log(this.state);
    }

    render() {
      return <WrapperComponent {...this.props} />;
    }
  }
  return logProps;
}

class Focus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Component: "Focus"
    };
  }

  render() {
    return <input type="text" defaultValue="forwardRef" />;
  }
}

export default logProps(Focus);
