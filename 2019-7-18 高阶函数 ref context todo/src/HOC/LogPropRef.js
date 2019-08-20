import React from "react";

function LogProps(WrapperComponent) {
  class LogProps extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        Component: "LogProps"
      };
    }

    render() {
      const { toRef, ...others } = this.props;
      return <WrapperComponent {...others} ref={this.props.toRef} />;
    }
  }

  return React.forwardRef((props, ref) => {
    return <LogProps {...props} toRef={ref} />;
  });
}

class Focus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Component: "Focus"
    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return <input type="text" defaultValue="forwardRef" />;
  }
}

export default LogProps(Focus);
