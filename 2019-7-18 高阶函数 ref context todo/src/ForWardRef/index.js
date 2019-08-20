import React from "react";

// class Refs extends React.Component {
//   constructor(props) {
//     super(props);
//     props.onRef(this);
//     this.state = {
//       ref: 'childRef',
//     };
//   }

//   componentDidMount() {}

//   aler() {
//     alert("child");
//   }

//   render() {
//     return (
//       <div>
//         <input ref={this.props.forRef} />
//       </div>
//     );
//   }
// }

const Refs = React.forwardRef((props, ref) => {
  console.log(props);
  return (
    <div>
      <input ref={ref} type="text" defaultValue="valueRefChild" />
    </div>
  );
});

export default Refs;
